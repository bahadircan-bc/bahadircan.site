"use client";

import { useEffect, useRef } from "react";
import { createTimer } from "animejs";

/**
 * ATOM — scroll-tracking signature.
 *
 * A monochrome SVG atom sitting above the work index. Electrons revolve
 * continuously along their (tilted elliptical) orbits at all times, and the
 * whole atom rotates around its own centre as the page scrolls — a scrubbed,
 * two-directional rotation. Echoes the hero statement "From electrons to
 * interface."
 *
 * SSR-safe: nucleus, orbits and electrons render statically at their start
 * positions, so it is legible without JS. Respects prefers-reduced-motion by
 * leaving the atom completely still.
 */

// Each orbit: tilt (deg) of the ellipse, its radii, the electron's revolution
// period (ms, distinct so they desync) and a starting phase (0..1).
const ORBITS = [
  { tilt: 0, rx: 84, ry: 30, dur: 4200, phase: 0 },
  { tilt: 60, rx: 84, ry: 30, dur: 5400, phase: 0.4 },
  { tilt: 120, rx: 84, ry: 30, dur: 4800, phase: 0.75 },
];

// How many full turns the atom makes across one viewport of scroll travel.
const SCROLL_TURNS = 2;

// Electron position on its (untilted) ellipse at cycle position p (0..1).
function electronXY(rx: number, ry: number, p: number) {
  const a = p * Math.PI * 2;
  return { x: rx * Math.cos(a), y: ry * Math.sin(a) };
}

export default function AmbientField() {
  const sectionRef = useRef<HTMLElement>(null);
  const atomRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const atom = atomRef.current;
    if (!section || !atom) return;

    // Respect prefers-reduced-motion — leave the atom completely still.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const electrons = Array.from(
      atom.querySelectorAll<SVGCircleElement>(".electron")
    );

    // --- continuous revolution: electrons follow their orbit at all times -----
    const clock = createTimer({
      duration: 1000,
      loop: true,
      onUpdate: (self) => {
        const ms = self.currentTime;
        electrons.forEach((el, i) => {
          const o = ORBITS[i];
          // ms/dur advances the phase; distinct periods keep them desynced.
          const p = (ms / o.dur + o.phase) % 1;
          const { x, y } = electronXY(o.rx, o.ry, p);
          el.setAttribute("transform", `translate(${x} ${y})`);
        });
      },
    });

    // --- scroll-tracking self-rotation (scrubbed, both directions) ------------
    let raf = 0;
    const applyRotation = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 when the section centre sits at the viewport centre; swings negative/
      // positive as it scrolls through, so rotation reverses on scroll-up.
      const sectionCenter = rect.top + rect.height / 2;
      const progress = (vh / 2 - sectionCenter) / vh;
      const deg = progress * 360 * SCROLL_TURNS;
      // viewBox is centred on (0,0), so rotate() spins about the atom's centre.
      atom.setAttribute("transform", `rotate(${deg.toFixed(2)})`);
    };
    const onScrollOrResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(applyRotation);
    };
    applyRotation();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    // --- pause the revolution while off-screen (battery/CPU) ------------------
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
            aria-label="An atom with electrons orbiting its nucleus"
          >
            {/* Root group — scroll rotates this around the centred origin. */}
            <g ref={atomRef}>
              {/* orbits + electrons */}
              {ORBITS.map((o, i) => {
                const start = electronXY(o.rx, o.ry, o.phase);
                return (
                  <g key={i} transform={`rotate(${o.tilt})`}>
                    <ellipse
                      cx={0}
                      cy={0}
                      rx={o.rx}
                      ry={o.ry}
                      className="fill-none stroke-line/40"
                      strokeWidth={0.8}
                    />
                    <circle
                      r={3.4}
                      className="electron fill-alabaster"
                      transform={`translate(${start.x} ${start.y})`}
                      style={{
                        filter: "drop-shadow(0 0 4px rgb(var(--fg) / 0.6))",
                      }}
                    />
                  </g>
                );
              })}

              {/* nucleus */}
              <circle r={16} className="fill-alabaster/10" />
              <circle
                r={7.5}
                className="fill-alabaster"
                style={{ filter: "drop-shadow(0 0 6px rgb(var(--fg) / 0.5))" }}
              />
              <circle cx={-2.5} cy={-1.5} r={2.4} className="fill-obsidian/30" />
              <circle cx={2.6} cy={2} r={2} className="fill-obsidian/30" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
