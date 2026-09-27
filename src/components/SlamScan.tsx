"use client";

import { useEffect, useRef } from "react";

/**
 * SLAM SCAN — "in motion".
 *
 * A quiet, live map-building view: a small robot drives a steady lap around
 * an unseen room while a rotating LiDAR beam sweeps around it. Every beam hit
 * is dropped into an occupancy grid, so the walls slowly appear out of the
 * dark — and the obstacles in the middle turn out to spell a word. After each
 * lap the robot parks and keeps scanning while the map fades, then goes again.
 *
 * Monochrome (theme tokens only), 1px hairlines, plain 2D canvas — no library.
 * prefers-reduced-motion renders the finished map statically; the loop pauses
 * while off-screen.
 */

// ---- World (metres) --------------------------------------------------------

const W = 20;
const H = 8;

/** The word the robot's map spells out. Any of A–Z and spaces. */
const TEXT = "HELLO";

type Seg = [number, number, number, number];

// 5×7 block font — each "#" becomes a solid pillar the LiDAR can trace.
const FONT: Record<string, string[]> = {
  A: [".###.", "#...#", "#...#", "#####", "#...#", "#...#", "#...#"],
  B: ["####.", "#...#", "#...#", "####.", "#...#", "#...#", "####."],
  C: [".###.", "#...#", "#....", "#....", "#....", "#...#", ".###."],
  D: ["####.", "#...#", "#...#", "#...#", "#...#", "#...#", "####."],
  E: ["#####", "#....", "#....", "####.", "#....", "#....", "#####"],
  F: ["#####", "#....", "#....", "####.", "#....", "#....", "#...."],
  G: [".###.", "#...#", "#....", "#.###", "#...#", "#...#", ".###."],
  H: ["#...#", "#...#", "#...#", "#####", "#...#", "#...#", "#...#"],
  I: ["#####", "..#..", "..#..", "..#..", "..#..", "..#..", "#####"],
  J: ["..###", "...#.", "...#.", "...#.", "#..#.", "#..#.", ".##.."],
  K: ["#...#", "#..#.", "#.#..", "##...", "#.#..", "#..#.", "#...#"],
  L: ["#....", "#....", "#....", "#....", "#....", "#....", "#####"],
  M: ["#...#", "##.##", "#.#.#", "#.#.#", "#...#", "#...#", "#...#"],
  N: ["#...#", "##..#", "#.#.#", "#..##", "#...#", "#...#", "#...#"],
  O: [".###.", "#...#", "#...#", "#...#", "#...#", "#...#", ".###."],
  P: ["####.", "#...#", "#...#", "####.", "#....", "#....", "#...."],
  Q: [".###.", "#...#", "#...#", "#...#", "#.#.#", "#..#.", ".##.#"],
  R: ["####.", "#...#", "#...#", "####.", "#.#..", "#..#.", "#...#"],
  S: [".####", "#....", "#....", ".###.", "....#", "....#", "####."],
  T: ["#####", "..#..", "..#..", "..#..", "..#..", "..#..", "..#.."],
  U: ["#...#", "#...#", "#...#", "#...#", "#...#", "#...#", ".###."],
  V: ["#...#", "#...#", "#...#", "#...#", "#...#", ".#.#.", "..#.."],
  W: ["#...#", "#...#", "#...#", "#.#.#", "#.#.#", "##.##", "#...#"],
  X: ["#...#", "#...#", ".#.#.", "..#..", ".#.#.", "#...#", "#...#"],
  Y: ["#...#", "#...#", ".#.#.", "..#..", "..#..", "..#..", "..#.."],
  Z: ["#####", "....#", "...#.", "..#..", ".#...", "#....", "#####"],
  " ": [".....", ".....", ".....", ".....", ".....", ".....", "....."],
};

/**
 * Lay the word out as a pixel grid centred in the room and return only the
 * outline edges of the filled pixels (inner edges can never be seen).
 */
function textWalls(text: string): Seg[] {
  const rows = 7;
  const glyphs = text.toUpperCase().split("").map((ch) => FONT[ch] ?? FONT[" "]);
  // 5 columns + a 2-column gap per glyph, wide enough for the beam to see
  // down between letters.
  const cols = glyphs.length * 7 - 2;
  const filled = (c: number, r: number) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols) return false;
    const g = Math.floor(c / 7);
    const gc = c % 7;
    return gc < 5 && glyphs[g][r][gc] === "#";
  };

  // Pixel size: fill the room but keep a corridor free for the robot's lap.
  const px = Math.min((W - 5.2) / cols, (H - 4.4) / rows);
  const ox = (W - cols * px) / 2;
  const oy = (H - rows * px) / 2;

  const segs: Seg[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (!filled(c, r)) continue;
      const x0 = ox + c * px;
      const y0 = oy + r * px;
      const x1 = x0 + px;
      const y1 = y0 + px;
      if (!filled(c, r - 1)) segs.push([x0, y0, x1, y0]);
      if (!filled(c + 1, r)) segs.push([x1, y0, x1, y1]);
      if (!filled(c, r + 1)) segs.push([x1, y1, x0, y1]);
      if (!filled(c - 1, r)) segs.push([x0, y1, x0, y0]);
    }
  }
  return segs;
}

const WALLS: Seg[] = [
  // the room
  [0, 0, W, 0],
  [W, 0, W, H],
  [W, H, 0, H],
  [0, H, 0, 0],
  ...textWalls(TEXT),
];

/**
 * The route: one steady, clockwise lap around the word — a rounded
 * rectangle inset from the walls. It starts and ends at the same spot, so
 * the robot can park there between runs and carry straight on.
 */
function lapRoute(): [number, number][] {
  const m = 1.1; // inset from the walls
  const rad = 0.9; // corner radius
  const x0 = m + rad;
  const x1 = W - m - rad;
  const y0 = m + rad;
  const y1 = H - m - rad;
  // Corner centres, clockwise from top-right (canvas y points down).
  const corners: [number, number, number][] = [
    [x1, y0, -Math.PI / 2],
    [x1, y1, 0],
    [x0, y1, Math.PI / 2],
    [x0, y0, Math.PI],
  ];
  const pts: [number, number][] = [[(x0 + x1) / 2 - 3, m]];
  for (const [cx, cy, a0] of corners) {
    for (let i = 0; i <= 8; i++) {
      const a = a0 + (i / 8) * (Math.PI / 2);
      pts.push([cx + Math.cos(a) * rad, cy + Math.sin(a) * rad]);
    }
  }
  pts.push(pts[0]);
  return pts;
}

const ROUTE = lapRoute();

const SPEED = 1.25; // m/s
const SCAN_HZ = 1.1; // beam revolutions per second
const RAY_STEP = (1.25 * Math.PI) / 180; // angular resolution
const RANGE = 6.5; // m
const CELL = 0.09; // occupancy cell size, m
const HOLD = 4; // s parked, admiring the finished map
const FADE = 1.6; // s the map fades before the next lap
const FRESH = 0.55; // s a new hit stays bright
const TAIL = 0.14; // s of beam afterglow

// Precompute cumulative route length for constant-speed interpolation.
const CUM: number[] = [0];
for (let i = 1; i < ROUTE.length; i++) {
  const [ax, ay] = ROUTE[i - 1];
  const [bx, by] = ROUTE[i];
  CUM.push(CUM[i - 1] + Math.hypot(bx - ax, by - ay));
}
const ROUTE_LEN = CUM[CUM.length - 1];
const DRIVE = ROUTE_LEN / SPEED;

function pointAt(d: number): { x: number; y: number } {
  // The route is a closed loop, so wrap rather than clamp.
  const dist = ((d % ROUTE_LEN) + ROUTE_LEN) % ROUTE_LEN;
  let i = 1;
  while (i < CUM.length - 1 && CUM[i] < dist) i++;
  const [ax, ay] = ROUTE[i - 1];
  const [bx, by] = ROUTE[i];
  const t = (dist - CUM[i - 1]) / (CUM[i] - CUM[i - 1] || 1);
  return { x: ax + (bx - ax) * t, y: ay + (by - ay) * t };
}

/** Position plus a heading smoothed across corners. */
function poseAt(d: number): { x: number; y: number; h: number } {
  const p = pointAt(d);
  const a = pointAt(d - 0.4);
  const b = pointAt(d + 0.4);
  return { ...p, h: Math.atan2(b.y - a.y, b.x - a.x) };
}

/** Distance along a ray to the nearest wall, or null beyond RANGE. */
function cast(x: number, y: number, a: number): number | null {
  const dx = Math.cos(a);
  const dy = Math.sin(a);
  let best = RANGE;
  for (const [x1, y1, x2, y2] of WALLS) {
    const sx = x2 - x1;
    const sy = y2 - y1;
    const den = dx * sy - dy * sx;
    if (Math.abs(den) < 1e-9) continue;
    const t = ((x1 - x) * sy - (y1 - y) * sx) / den;
    const u = ((x1 - x) * dy - (y1 - y) * dx) / den;
    if (t > 0 && t < best && u >= 0 && u <= 1) best = t;
  }
  return best < RANGE ? best : null;
}

// ---- Simulation state ------------------------------------------------------

interface Sim {
  cells: Map<number, [number, number]>; // occupancy grid: key -> cell centre
  fresh: Map<number, number>; // cell key -> time it was last hit
  rays: { x: number; y: number; t: number }[]; // recent beam endpoints
  trail: [number, number][];
  beam: number; // current beam angle
  time: number; // seconds into the current run
  scans: number;
}

function newSim(beam = 0): Sim {
  return { cells: new Map(), fresh: new Map(), rays: [], trail: [], beam, time: 0, scans: 0 };
}

/** Where the robot is at a point in the run: driving the lap, then parked. */
function robotAt(time: number) {
  return poseAt(Math.min(time, DRIVE) * SPEED);
}

function step(sim: Sim, dt: number) {
  sim.time += dt;
  const pose = robotAt(sim.time);
  // Keep mapping while driving and parked; stop once the map starts fading.
  const mapping = sim.time < DRIVE + HOLD;

  // Breadcrumb trail every ~0.3 m.
  const last = sim.trail[sim.trail.length - 1];
  if (!last || Math.hypot(pose.x - last[0], pose.y - last[1]) > 0.3) {
    sim.trail.push([pose.x, pose.y]);
  }

  // Sweep the beam and cast every ray it passed over this tick. The beam
  // never stops — the robot keeps scanning while parked.
  {
    const sweep = 2 * Math.PI * SCAN_HZ * dt;
    const from = sim.beam;
    const to = from + sweep;
    for (let a = from; a < to; a += RAY_STEP) {
      const r = cast(pose.x, pose.y, a);
      const hx = pose.x + Math.cos(a) * (r ?? RANGE);
      const hy = pose.y + Math.sin(a) * (r ?? RANGE);
      sim.rays.push({ x: hx, y: hy, t: sim.time });
      if (r === null || !mapping) continue;
      const cx = Math.floor(hx / CELL);
      const cy = Math.floor(hy / CELL);
      const key = cy * 10000 + cx;
      if (!sim.cells.has(key)) sim.cells.set(key, [(cx + 0.5) * CELL, (cy + 0.5) * CELL]);
      sim.fresh.set(key, sim.time);
    }
    if (mapping && Math.floor(to / (2 * Math.PI)) > Math.floor(from / (2 * Math.PI))) {
      sim.scans++;
    }
    sim.beam = to % (2 * Math.PI * 1000);
  }

  // Drop hits and rays that are no longer "fresh".
  sim.fresh.forEach((t, key) => {
    if (sim.time - t > FRESH) sim.fresh.delete(key);
  });
  let n = 0;
  while (n < sim.rays.length && sim.time - sim.rays[n].t > TAIL) n++;
  if (n) sim.rays.splice(0, n);
}

/** Run a whole drive offline — used for the static, reduced-motion map. */
function finishedSim(): Sim {
  const sim = newSim();
  const dt = 1 / 60;
  while (sim.time < DRIVE) step(sim, dt);
  sim.fresh.clear();
  sim.rays = [];
  return sim;
}

// ---- Rendering -------------------------------------------------------------

function readTokens() {
  const s = getComputedStyle(document.documentElement);
  return {
    fg: s.getPropertyValue("--fg").trim().split(/\s+/).join(","),
    line: s.getPropertyValue("--line").trim().split(/\s+/).join(","),
  };
}

function draw(
  ctx: CanvasRenderingContext2D,
  sim: Sim,
  cssW: number,
  tokens: { fg: string; line: string },
  moving: boolean
) {
  const k = cssW / W; // px per metre
  const cssH = H * k;
  const fg = (a: number) => `rgba(${tokens.fg},${a})`;
  const line = (a: number) => `rgba(${tokens.line},${a})`;

  // Fade the whole map out at the end of a run.
  const end = sim.time - DRIVE - HOLD;
  const alpha = moving && end > 0 ? Math.max(0, 1 - end / FADE) : 1;

  ctx.clearRect(0, 0, cssW, cssH);

  // Metric grid: faint dots every metre.
  ctx.fillStyle = line(0.35);
  for (let gx = 1; gx < W; gx++) {
    for (let gy = 1; gy < H; gy++) ctx.fillRect(gx * k - 0.5, gy * k - 0.5, 1, 1);
  }

  ctx.globalAlpha = alpha;

  // Occupancy grid.
  const dot = Math.max(1, Math.min(2, k * CELL * 0.6));
  ctx.fillStyle = fg(0.55);
  sim.cells.forEach(([x, y]) => ctx.fillRect(x * k - dot / 2, y * k - dot / 2, dot, dot));

  // Breadcrumb trail.
  ctx.fillStyle = fg(0.28);
  for (const [x, y] of sim.trail) ctx.fillRect(x * k - 0.5, y * k - 0.5, 1, 1);

  const p = robotAt(sim.time);
  const px = p.x * k;
  const py = p.y * k;

  if (moving) {
    // Fresh hits glow, then settle into the map.
    sim.fresh.forEach((t, key) => {
      const cell = sim.cells.get(key);
      if (!cell) return;
      const life = 1 - (sim.time - t) / FRESH;
      ctx.fillStyle = fg(0.55 + life * 0.35);
      const s = dot + life;
      ctx.fillRect(cell[0] * k - s / 2, cell[1] * k - s / 2, s, s);
    });
  }

  // Only the map fades between laps — the robot and its beam stay put.
  ctx.globalAlpha = 1;

  if (moving && sim.rays.length > 1) {
    // Beam afterglow: the area the last few rays actually saw, so it
    // stops at walls instead of bleeding through them.
    ctx.fillStyle = fg(0.045);
    ctx.beginPath();
    ctx.moveTo(px, py);
    for (const r of sim.rays) ctx.lineTo(r.x * k, r.y * k);
    ctx.closePath();
    ctx.fill();

    // Leading edge of the beam, ending where it lands.
    const lead = sim.rays[sim.rays.length - 1];
    const grad = ctx.createLinearGradient(px, py, lead.x * k, lead.y * k);
    grad.addColorStop(0, fg(0.5));
    grad.addColorStop(1, fg(0.1));
    ctx.strokeStyle = grad;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(lead.x * k, lead.y * k);
    ctx.stroke();
  }

  // Robot: ring + heading tick. Always drawn, even between laps.
  ctx.strokeStyle = fg(1);
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(px, py, 4, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(px, py);
  ctx.lineTo(px + Math.cos(p.h) * 9, py + Math.sin(p.h) * 9);
  ctx.stroke();

  // Viewfinder corners.
  const c = 10;
  ctx.strokeStyle = line(0.9);
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (const [x, y, sx, sy] of [
    [0.5, 0.5, 1, 1],
    [cssW - 0.5, 0.5, -1, 1],
    [0.5, cssH - 0.5, 1, -1],
    [cssW - 0.5, cssH - 0.5, -1, -1],
  ]) {
    ctx.moveTo(x + sx * c, y);
    ctx.lineTo(x, y);
    ctx.lineTo(x, y + sy * c);
  }
  ctx.stroke();
}

// ---- Component -------------------------------------------------------------

export default function SlamScan() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const readoutRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!wrap || !canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let tokens = readTokens();
    let cssW = 0;
    let sim = reduced ? finishedSim() : newSim();
    let raf = 0;
    let last = 0;
    let visible = false;
    let lastReadout = -1;

    const readout = () => {
      const el = readoutRef.current;
      if (!el) return;
      const dist = Math.min(sim.time, DRIVE) * SPEED;
      el.textContent = `scan ${String(sim.scans).padStart(3, "0")} · ${sim.cells.size
        .toLocaleString("en-US")
        .padStart(5, " ")} pts · ${dist.toFixed(1)} m`;
    };

    const render = () => draw(ctx, sim, cssW, tokens, !reduced);

    const resize = () => {
      cssW = wrap.clientWidth;
      const cssH = (cssW * H) / W;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
      canvas.style.height = `${cssH}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      render();
    };

    const frame = (now: number) => {
      // Clamp dt so a backgrounded tab doesn't teleport the robot.
      const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60;
      last = now;
      step(sim, dt);
      // Next lap: fresh map, same robot, beam carries on where it was.
      if (sim.time > DRIVE + HOLD + FADE) sim = newSim(sim.beam);
      render();
      if (Math.floor(now / 200) !== lastReadout) {
        lastReadout = Math.floor(now / 200);
        readout();
      }
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (reduced || raf || !visible) return;
      last = 0;
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    resize();
    readout();

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    // Re-read colours when the theme toggles.
    const mo = new MutationObserver(() => {
      tokens = readTokens();
      render();
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(wrap);

    return () => {
      stop();
      ro.disconnect();
      mo.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <section aria-labelledby="motion-heading" className="w-full bg-obsidian text-alabaster">
      <div className="mx-auto w-full max-w-5xl px-6 py-24 lg:px-10">
        <div className="mb-10 flex items-baseline justify-between gap-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          <h2 id="motion-heading" className="font-normal">
            in motion
          </h2>
          <span className="hidden sm:inline">lidar · slam</span>
        </div>

        <figure>
          <div ref={wrapRef} className="w-full">
            <canvas
              ref={canvasRef}
              role="img"
              aria-label={`A robot drives laps around an unmapped room while its rotating LiDAR beam builds a map, point by point, of obstacles that spell "${TEXT}".`}
              className="block w-full"
              style={{ aspectRatio: `${W} / ${H}` }}
            />
          </div>

          <figcaption className="mt-5 flex flex-col gap-1 font-mono text-xs text-muted sm:flex-row sm:items-baseline sm:justify-between">
            <span>
              live map-building — autonomous biped navigation, 2025
            </span>
            <span
              ref={readoutRef}
              aria-hidden="true"
              className="whitespace-pre tabular-nums"
            />
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
