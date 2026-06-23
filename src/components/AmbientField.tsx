"use client";

import { useEffect, useRef } from "react";
import { createTimer } from "animejs";

/**
 * ATOM — a 3D, scroll-tracking signature.
 *
 * The atom is modelled in 3D and projected to 2D every frame. Electrons revolve
 * continuously along their inclined orbits, and scrolling tumbles the whole atom
 * in space: orbit rings foreshorten as they tilt and electrons pass in front of
 * and behind the nucleus (occlusion + depth-scaled size/opacity). Echoes the
 * hero statement "From electrons to interface."
 *
 * SSR-safe: the initial projection (orbits, electrons, nucleus) is computed with
 * the same pure math at render time, so it is legible with no JS. Respects
 * prefers-reduced-motion by leaving the atom still at its base tilt.
 */

// ---- geometry / look knobs -------------------------------------------------
const R = 76; // orbit radius — equal for every ring (equidistant)
const INCL = 1.2566; // 72° — inclination that fans the orbit rings into an atom
const MAX_TILT = (25 * Math.PI) / 180; // cap each orbit's in-plane tilt to ±25° of horizontal
const BASE_TILT = 0.42; // constant X-tilt so it reads 3D even at rest (rad)
const SCROLL_TURNS = 0.3; // turns per viewport of scroll travel (subtle)
const SQUASH = 0.6; // vertical scale (<1) on orbits/electrons → more horizontal than vertical
const F = 340; // perspective focal length (relative to 200-unit viewBox)
const ELECTRON_R = 4.2; // base electron radius (scaled by depth)
const SAMPLES = 72; // points sampled per orbit path
const NUC_R = 7; // base nucleon radius (scaled by depth)
const RINGS = 5; // number of orbit rings (fanned around the axis)

// One electron per ring. `dur` = revolution period (ms, distinct per ring so
// they desync); `phase` staggers their starting positions.
const ELECTRONS = [
  { orbit: 0, dur: 4200, phase: 0 },
  { orbit: 1, dur: 5200, phase: 0.2 },
  { orbit: 2, dur: 4600, phase: 0.45 },
  { orbit: 3, dur: 5800, phase: 0.65 },
  { orbit: 4, dur: 5000, phase: 0.85 },
];

type V3 = { x: number; y: number; z: number };

// Three nucleons in 3D (atom-space). Big relative to their spacing (so they jam
// into one solid clump) and with distinct z (so the core is genuinely 3D and
// never collapses edge-on as the atom tips).
const NUCLEONS: V3[] = [
  { x: 0, y: -5.5, z: 3 },
  { x: -4.8, y: 2.75, z: -3 },
  { x: 4.8, y: 2.75, z: 3 },
];

// ---- pure 3D helpers (shared by SSR render + the animation loop) ------------
function rotX(p: V3, a: number): V3 {
  const c = Math.cos(a),
    s = Math.sin(a);
  return { x: p.x, y: p.y * c - p.z * s, z: p.y * s + p.z * c };
}
function rotY(p: V3, a: number): V3 {
  const c = Math.cos(a),
    s = Math.sin(a);
  return { x: p.x * c + p.z * s, y: p.y, z: -p.x * s + p.z * c };
}
function rotZ(p: V3, a: number): V3 {
  const c = Math.cos(a),
    s = Math.sin(a);
  return { x: p.x * c - p.y * s, y: p.x * s + p.y * c, z: p.z };
}

// orbit-local circle point -> atom space (incline, then fan within ±MAX_TILT of
// horizontal so no orbit leans more than 25° — equidistant across that range).
function orient(i: number, base: V3): V3 {
  const fan = (i / (RINGS - 1) - 0.5) * 2 * MAX_TILT;
  return rotZ(rotX(base, INCL), fan);
}
// atom space -> world: scroll tips the whole atom around the X axis (so it reads
// as one rigid body — scroll down tilts the bottom toward the viewer). BASE_TILT
// is folded in as the resting angle; CONST_Y is a fixed (non-animated) tilt knob
// for a touch more dimensionality at rest without reintroducing an off-axis spin.
const CONST_Y = 0;
function world(p: V3, spin: number): V3 {
  return rotY(rotX(p, BASE_TILT + spin), CONST_Y);
}
// perspective projection: +z is toward the viewer (nearer = larger)
function project(p: V3) {
  const s = F / (F - p.z);
  return { X: p.x * s, Y: p.y * s, s, z: p.z };
}

function electronOnOrbit(i: number, phase: number): V3 {
  const a = phase * 2 * Math.PI;
  return orient(i, { x: R * Math.cos(a), y: R * Math.sin(a), z: 0 });
}
function electronProj(i: number, phase: number, spin: number) {
  return project(world(electronOnOrbit(i, phase), spin));
}
function orbitPath(i: number, spin: number): string {
  let d = "";
  for (let k = 0; k <= SAMPLES; k++) {
    const pr = project(world(electronOnOrbit(i, k / SAMPLES), spin));
    d += `${k === 0 ? "M" : "L"}${pr.X.toFixed(2)} ${(pr.Y * SQUASH).toFixed(2)}`;
  }
  return `${d}Z`;
}
// depth → opacity (s spans ~0.82..1.28 for z in ±R); nearer is brighter
function depthOpacity(s: number): number {
  const t = (s - 0.82) / (1.28 - 0.82);
  return 0.35 + Math.max(0, Math.min(1, t)) * 0.65;
}
function nucleonProj(i: number, spin: number) {
  return project(world(NUCLEONS[i], spin));
}

export default function AmbientField() {
  const sectionRef = useRef<HTMLElement>(null);
  const atomRef = useRef<SVGGElement>(null);
  const coreRef = useRef<SVGGElement>(null);
  const nucleusRef = useRef<SVGGElement>(null);
  const nucleonsRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const atom = atomRef.current;
    const core = coreRef.current;
    const nucleus = nucleusRef.current;
    const nucleonGroup = nucleonsRef.current;
    if (!section || !atom || !core || !nucleus || !nucleonGroup) return;

    // Respect prefers-reduced-motion — leave the atom still at its base tilt.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const orbits = Array.from(atom.querySelectorAll<SVGPathElement>(".orbit"));
    const electrons = Array.from(
      core.querySelectorAll<SVGCircleElement>(".electron")
    );
    const nucleons = Array.from(
      nucleonGroup.querySelectorAll<SVGCircleElement>(".nucleon")
    );

    let spin = 0;
    let timeMs = 0;

    // Single draw used by both the revolution tick and the scroll handler —
    // scroll changes the projected shape, so both must redraw.
    const render = () => {
      for (let i = 0; i < orbits.length; i++) {
        orbits[i].setAttribute("d", orbitPath(i, spin));
      }
      for (let i = 0; i < electrons.length; i++) {
        const e = ELECTRONS[i];
        const pr = electronProj(e.orbit, timeMs / e.dur + e.phase, spin);
        const el = electrons[i];
        el.setAttribute("cx", pr.X.toFixed(2));
        el.setAttribute("cy", (pr.Y * SQUASH).toFixed(2));
        el.setAttribute("r", (ELECTRON_R * pr.s).toFixed(2));
        el.setAttribute("opacity", depthOpacity(pr.s).toFixed(3));
        // Occlusion: draw electrons in front of the nucleus after it, behind
        // it before it. +z faces the viewer.
        if (pr.z >= 0) core.appendChild(el);
        else core.insertBefore(el, nucleus);
      }
      // Nucleus: project each nucleon, depth-scale its radius, then z-sort so
      // nearer spheres overlap farther ones — the core tips as a solid 3D clump.
      const order: { el: SVGCircleElement; z: number }[] = [];
      for (let i = 0; i < nucleons.length; i++) {
        const pr = nucleonProj(i, spin);
        const el = nucleons[i];
        el.setAttribute("cx", pr.X.toFixed(2));
        el.setAttribute("cy", pr.Y.toFixed(2));
        el.setAttribute("r", (NUC_R * pr.s).toFixed(2));
        order.push({ el, z: pr.z });
      }
      order.sort((a, b) => a.z - b.z); // far first
      for (const { el } of order) nucleonGroup.appendChild(el);
    };

    // --- continuous revolution: a monotonic clock (the timer's looping
    // currentTime would jump on each loop, so use performance.now()). ---------
    const start = performance.now();
    const clock = createTimer({
      duration: 60000,
      loop: true,
      onUpdate: () => {
        timeMs = performance.now() - start;
        render();
      },
    });

    // --- scroll → 3D spin (scrubbed, both directions) ------------------------
    let raf = 0;
    const computeSpin = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const center = rect.top + rect.height / 2;
      const progress = (vh / 2 - center) / vh; // ~[-0.75..0.75] passing through
      spin = progress * 2 * Math.PI * SCROLL_TURNS;
      render();
    };
    const onScrollOrResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(computeSpin);
    };
    computeSpin();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    // --- pause the revolution while off-screen -------------------------------
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? clock.resume() : clock.pause()),
      { threshold: 0 }
    );
    io.observe(section);

    return () => {
      io.disconnect();
      clock.pause();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-hidden="true"
      className="w-full bg-obsidian text-alabaster"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-24 lg:px-10">
        <p className="mb-10 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          in orbit
        </p>

        <div className="mx-auto w-full max-w-sm">
          <svg
            viewBox="-100 -100 200 200"
            className="h-auto w-full"
            role="img"
            aria-label="A three-dimensional atom with electrons orbiting its nucleus"
          >
            {/* Root group — holds the whole projected atom. */}
            <g ref={atomRef}>
              {/* orbit rings (behind the core) */}
              <g>
                {Array.from({ length: RINGS }).map((_, i) => (
                  <path
                    key={i}
                    className="orbit fill-none stroke-line/40"
                    strokeWidth={0.8}
                    d={orbitPath(i, 0)}
                  />
                ))}
              </g>

              {/* electrons + nucleus — reordered each frame for occlusion */}
              <g ref={coreRef}>
                {ELECTRONS.map((e, i) => {
                  const pr = electronProj(e.orbit, e.phase, 0);
                  return (
                    <circle
                      key={i}
                      className="electron fill-alabaster"
                      cx={pr.X.toFixed(2)}
                      cy={(pr.Y * SQUASH).toFixed(2)}
                      r={(ELECTRON_R * pr.s).toFixed(2)}
                      opacity={depthOpacity(pr.s).toFixed(3)}
                      style={{
                        filter: "drop-shadow(0 0 4px rgb(var(--fg) / 0.6))",
                      }}
                    />
                  );
                })}

                <g ref={nucleusRef}>
                  {/* Three flat nucleons (no outlines, no glow, no shading)
                      projected in 3D — they fuse into one uniform solid clump
                      that tips with the atom. */}
                  <g ref={nucleonsRef}>
                    {NUCLEONS.map((_, i) => {
                      const pr = nucleonProj(i, 0);
                      return (
                        <circle
                          key={i}
                          className="nucleon fill-alabaster"
                          cx={pr.X.toFixed(2)}
                          cy={pr.Y.toFixed(2)}
                          r={(NUC_R * pr.s).toFixed(2)}
                        />
                      );
                    })}
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
