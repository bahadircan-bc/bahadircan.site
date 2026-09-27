"use client";

import { useEffect, useRef } from "react";

/**
 * SLAM SCAN — "in motion".
 *
 * A quiet, live map-building view: a small robot drives through a chain of
 * unseen rooms while a rotating LiDAR beam sweeps around it. Every beam hit
 * is dropped into an occupancy grid, so the walls slowly appear out of the
 * dark — and each room turns out to be shaped like a letter, spelling a
 * word. At the end the robot parks and keeps scanning while the map fades,
 * then drives the route back the other way.
 *
 * Monochrome (theme tokens only), 1px hairlines, plain 2D canvas — no library.
 * prefers-reduced-motion renders the finished map statically; the loop pauses
 * while off-screen.
 */

// ---- World (metres) --------------------------------------------------------

const W = 20;
const H = 6;

/** The word the rooms spell. The route below is written for this word. */
const TEXT = "HELLO";

type Seg = [number, number, number, number];

// Each letter is a room: "#" is open floor, "." is solid wall, so the floor
// itself has the letter's shape. 7×7 cells per letter.
const ROOMS: Record<string, string[]> = {
  H: ["##...##", "##...##", "##...##", "#######", "##...##", "##...##", "##...##"],
  E: ["#######", "##.....", "##.....", "#######", "##.....", "##.....", "#######"],
  L: ["##.....", "##.....", "##.....", "##.....", "##.....", "#######", "#######"],
  O: ["#######", "#######", "##...##", "##...##", "##...##", "#######", "#######"],
};

// Doorway row in the 1-cell wall between each pair of rooms. They alternate
// bottom/top so the robot has to travel the full length of each letter
// (L only reaches its right wall along its foot, so L→L and L→O stay low).
const DOORS = [6, 0, 6, 6];

const ROWS = 7;
const COLS = TEXT.length * 8 - 1;
const MARGIN = 0.5; // m of empty canvas around the plan
const CW = (W - 2 * MARGIN) / COLS; // cell width, m
const CH = (H - 2 * MARGIN) / ROWS; // cell height, m

/** Open floor cells of the whole plan: rooms + dividing walls with doors. */
const FLOOR: boolean[][] = Array.from({ length: ROWS }, (_, r) => {
  const row: boolean[] = [];
  TEXT.split("").forEach((ch, i) => {
    if (i) row.push(r === DOORS[i - 1]);
    for (const c of ROOMS[ch][r]) row.push(c === "#");
  });
  return row;
});

const isFloor = (c: number, r: number) =>
  r >= 0 && r < ROWS && c >= 0 && c < COLS && FLOOR[r][c];

/** Plan cell coordinates (fractional) → world metres. */
const wx = (u: number) => MARGIN + u * CW;
const wy = (v: number) => MARGIN + v * CH;

/** Walls: every cell edge with floor on exactly one side. */
function planWalls(): Seg[] {
  const segs: Seg[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (!isFloor(c, r)) continue;
      const x0 = wx(c);
      const y0 = wy(r);
      const x1 = wx(c + 1);
      const y1 = wy(r + 1);
      if (!isFloor(c, r - 1)) segs.push([x0, y0, x1, y0]);
      if (!isFloor(c + 1, r)) segs.push([x1, y0, x1, y1]);
      if (!isFloor(c, r + 1)) segs.push([x1, y1, x0, y1]);
      if (!isFloor(c - 1, r)) segs.push([x0, y1, x0, y0]);
    }
  }
  return segs;
}

const WALLS = planWalls();

/**
 * The route, in plan cell units (u = columns, v = rows). It walks every leg
 * and arm of every letter, dead ends included. Letters start at columns
 * 0, 8, 16, 24, 32; the doorways sit at columns 7, 15, 23, 31.
 */
const PATH: [number, number][] = [
  // H — left leg top→bottom, back to the crossbar, across, right leg up and down
  [1, 0.5], [1, 6.5], [1, 3.5], [6, 3.5], [6, 0.5], [6, 6.5],
  // bottom doorway → E: bottom arm, middle arm, then out along the top arm
  [9, 6.5], [14.5, 6.5], [9, 6.5], [9, 3.5], [14.5, 3.5], [9, 3.5], [9, 0.5],
  // top doorway → first L: down the spine, along the foot
  [17, 0.5], [17, 6.5],
  // bottom doorway → second L: up the spine and back, along the foot
  [25, 6.5], [25, 0.5], [25, 6.5],
  // bottom doorway → O: once round the ring
  [33, 6.5], [33, 6], [38, 6], [38, 1], [33, 1], [33, 6],
];

const ROUTE: [number, number][] = PATH.map(([u, v]) => [wx(u), wy(v)]);

const SPEED = 1.6; // m/s
const SCAN_HZ = 1.3; // beam revolutions per second
const RAY_STEP = (1.25 * Math.PI) / 180; // angular resolution
const RANGE = 6.5; // m
const CELL = 0.07; // occupancy cell size, m
const HOLD = 4; // s parked, admiring the finished map
const FADE = 1.6; // s the map fades before the next run
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
  const dist = Math.max(0, Math.min(ROUTE_LEN, d));
  let i = 1;
  while (i < CUM.length - 1 && CUM[i] < dist) i++;
  const [ax, ay] = ROUTE[i - 1];
  const [bx, by] = ROUTE[i];
  const t = (dist - CUM[i - 1]) / (CUM[i] - CUM[i - 1] || 1);
  return { x: ax + (bx - ax) * t, y: ay + (by - ay) * t };
}

/**
 * Position plus a heading smoothed across corners. `reverse` drives the
 * route backwards, so each run starts where the last one parked.
 */
function poseAt(d: number, reverse: boolean): { x: number; y: number; h: number } {
  const at = (x: number) => pointAt(reverse ? ROUTE_LEN - x : x);
  const p = at(d);
  const a = at(d - 0.25);
  const b = at(d + 0.25);
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
  reverse: boolean; // driving the route backwards this run
  scans: number;
}

function newSim(beam = 0, reverse = false): Sim {
  return {
    cells: new Map(),
    fresh: new Map(),
    rays: [],
    trail: [],
    beam,
    time: 0,
    reverse,
    scans: 0,
  };
}

/** Where the robot is at a point in the run: driving the route, then parked. */
function robotAt(sim: Sim) {
  return poseAt(Math.min(sim.time, DRIVE) * SPEED, sim.reverse);
}

function step(sim: Sim, dt: number) {
  sim.time += dt;
  const pose = robotAt(sim);
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

  const p = robotAt(sim);
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
      // Next run: fresh map, and the robot drives back the way it came, so
      // it never jumps. The beam carries on where it was.
      if (sim.time > DRIVE + HOLD + FADE) sim = newSim(sim.beam, !sim.reverse);
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
              aria-label={`A robot drives through unmapped rooms while its rotating LiDAR beam builds a map, point by point, revealing that the rooms are shaped like the letters "${TEXT}".`}
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
