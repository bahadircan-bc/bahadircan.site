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
const R = 74; // orbit radius (viewBox units)
const INCL = 1.2566; // 72° — inclination that fans the 3 orbits into an atom
const BASE_TILT = 0.42; // constant X-tilt so it reads 3D even at rest (rad)
const SCROLL_TURNS = 1.5; // spin per viewport of scroll travel
const F = 340; // perspective focal length (relative to 200-unit viewBox)
const ELECTRON_R = 4.2; // base electron radius (scaled by depth)
const SAMPLES = 72; // points sampled per orbit path

// Each orbit's electron: revolution period (ms, distinct so they desync) + phase.
const ORBITS = [
  { dur: 4200, phase: 0 },
  { dur: 5400, phase: 0.4 },
  { dur: 4800, phase: 0.75 },
];

type V3 = { x: number; y: number; z: number };

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

// orbit-local circle point -> atom space (incline, then fan around the axis)
function orient(i: number, base: V3): V3 {
  return rotZ(rotX(base, INCL), (i * 2 * Math.PI) / 3);
}
// atom space -> world: scroll spins around Y, then a constant downward tilt
function world(p: V3, spin: number): V3 {
  return rotX(rotY(p, spin), BASE_TILT);
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
    d += `${k === 0 ? "M" : "L"}${pr.X.toFixed(2)} ${pr.Y.toFixed(2)}`;
  }
  return `${d}Z`;
}
// depth → opacity (s spans ~0.82..1.28 for z in ±R); nearer is brighter
function depthOpacity(s: number): number {
  const t = (s - 0.82) / (1.28 - 0.82);
  return 0.35 + Math.max(0, Math.min(1, t)) * 0.65;
}

export default function AmbientField() {
  const sectionRef = useRef<HTMLElement>(null);
  const atomRef = useRef<SVGGElement>(null);
  const coreRef = useRef<SVGGElement>(null);
  const nucleusRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const atom = atomRef.current;
    const core = coreRef.current;
    const nucleus = nucleusRef.current;
    if (!section || !atom || !core || !nucleus) return;

    // Respect prefers-reduced-motion — leave the atom still at its base tilt.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const orbits = Array.from(atom.querySelectorAll<SVGPathElement>(".orbit"));
    const electrons = Array.from(
      core.querySelectorAll<SVGCircleElement>(".electron")
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
        const o = ORBITS[i];
        const pr = electronProj(i, timeMs / o.dur + o.phase, spin);
        const el = electrons[i];
        el.setAttribute("cx", pr.X.toFixed(2));
        el.setAttribute("cy", pr.Y.toFixed(2));
        el.setAttribute("r", (ELECTRON_R * pr.s).toFixed(2));
        el.setAttribute("opacity", depthOpacity(pr.s).toFixed(3));
        // Occlusion: draw electrons in front of the nucleus after it, behind
        // it before it. +z faces the viewer.
        if (pr.z >= 0) core.appendChild(el);
        else core.insertBefore(el, nucleus);
      }
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
                {ORBITS.map((_, i) => (
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
                {ORBITS.map((o, i) => {
                  const pr = electronProj(i, o.phase, 0);
                  return (
                    <circle
                      key={i}
                      className="electron fill-alabaster"
                      cx={pr.X.toFixed(2)}
                      cy={pr.Y.toFixed(2)}
                      r={(ELECTRON_R * pr.s).toFixed(2)}
                      opacity={depthOpacity(pr.s).toFixed(3)}
                      style={{
                        filter: "drop-shadow(0 0 4px rgb(var(--fg) / 0.6))",
                      }}
                    />
                  );
                })}

                <g ref={nucleusRef}>
                  <circle r={16} className="fill-alabaster/10" />
                  <circle
                    r={7.5}
                    className="fill-alabaster"
                    style={{
                      filter: "drop-shadow(0 0 6px rgb(var(--fg) / 0.5))",
                    }}
                  />
                  <circle
                    cx={-2.5}
                    cy={-1.5}
                    r={2.4}
                    className="fill-obsidian/30"
                  />
                  <circle cx={2.6} cy={2} r={2} className="fill-obsidian/30" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
