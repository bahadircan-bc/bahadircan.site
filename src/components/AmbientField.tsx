"use client";

import { useEffect, useRef } from "react";
import { createTimer, animate, stagger } from "animejs";

/**
 * AMBIENT FIELD — "Electron Field".
 *
 * A quiet, always-on band sitting above the work index. Small electron dots
 * drift continuously left→right along faint horizontal rails, echoing two
 * existing motifs: the razor-thin Focal Plane line and the hero statement
 * "From electrons to interface."
 *
 * Strictly monochrome (design tokens only). SSR-safe: the rails + dots render
 * statically at rest, so it is legible without JS and respects
 * prefers-reduced-motion by simply never starting the loops.
 */

const RAILS = 5;
const DOTS_PER_RAIL = 6;

export default function AmbientField() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Respect prefers-reduced-motion — leave the field at rest, no loops.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dots = Array.from(
      root.querySelectorAll<HTMLElement>(".electron")
    );
    if (!dots.length) return;

    // One continuous clock drives every dot. Each dot has a fixed phase offset
    // (its column within the rail, plus a per-rail nudge) so the field stays
    // evenly spread and never looks synchronized — and the offsets persist
    // across loops, unlike a per-target start delay.
    const clock = createTimer({
      duration: 9000,
      loop: true,
      onUpdate: (self) => {
        const t = self.progress; // 0..1
        for (let i = 0; i < dots.length; i++) {
          const rail = Math.floor(i / DOTS_PER_RAIL);
          const col = i % DOTS_PER_RAIL;
          const offset = col / DOTS_PER_RAIL + rail * 0.13;
          const p = (t + offset) % 1; // position along the rail, wrapped
          const dot = dots[i];
          // cqw = % of the rail's own width (container-type: inline-size).
          // -50% Y keeps the dot vertically centred on its rail.
          dot.style.transform = `translate(${p * 100}cqw, -50%)`;
          // Fade in/out near the rail edges so the wrap-around reads as flow.
          const edge = Math.min(p, 1 - p);
          dot.style.opacity = String(0.12 + Math.min(edge * 8, 1) * 0.75);
        }
      },
    });

    // Subtle independent opacity shimmer on the rails themselves.
    const shimmer = animate(
      Array.from(root.querySelectorAll<HTMLElement>(".rail-glow")),
      {
      opacity: [0.25, 0.5],
      ease: "inOutSine",
      duration: 4000,
      loop: true,
      alternate: true,
      delay: stagger(700),
    });

    // Pause loops while off-screen (battery/CPU friendliness for always-on motion).
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clock.resume();
          shimmer.resume();
        } else {
          clock.pause();
          shimmer.pause();
        }
      },
      { threshold: 0 }
    );
    io.observe(root);

    return () => {
      io.disconnect();
      clock.pause();
      shimmer.pause();
    };
  }, []);

  return (
    <section aria-hidden="true" className="w-full bg-obsidian text-alabaster">
      <div className="mx-auto w-full max-w-5xl px-6 py-24 lg:px-10">
        <p className="mb-10 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          in motion
        </p>

        <div
          ref={rootRef}
          // container-query width unit (cqw) lets dots travel the rail width
          // regardless of viewport; [container-type:inline-size] enables it.
          className="relative flex flex-col gap-10 [container-type:inline-size]"
        >
          {Array.from({ length: RAILS }).map((_, rail) => (
            <div key={rail} className="relative h-3 w-full">
              {/* faint full-width rail */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-line/30"
              />
              {/* shimmer overlay (animated opacity) */}
              <span
                aria-hidden="true"
                className="rail-glow absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-line/40 opacity-30"
              />
              {/* electron dots — staggered starting positions (static fallback) */}
              {Array.from({ length: DOTS_PER_RAIL }).map((_, dot) => {
                const start = dot / DOTS_PER_RAIL + rail * 0.13;
                const p = start % 1;
                return (
                  <span
                    key={dot}
                    aria-hidden="true"
                    className="electron absolute top-1/2 h-1 w-1 rounded-full bg-alabaster shadow-[0_0_8px_rgb(var(--fg)/0.5)]"
                    style={{
                      transform: `translate(${p * 100}cqw, -50%)`,
                      opacity: 0.5,
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
