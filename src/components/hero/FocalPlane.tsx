"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { STRATA } from "@/content/strata";
import StratumRow from "./StratumRow";

/**
 * THE FOCAL PLANE — the signature element.
 *
 * A razor-thin horizontal line across a near-empty canvas that behaves like a
 * camera focal / depth-of-field slider. As the user scrolls through this tall
 * section the line travels vertically and "focuses" on one stratum at a time;
 * the other strata recede.
 *
 * Drivers:
 *  - scroll (primary, works on every device)
 *  - keyboard (arrow / page / home-end) for full accessibility
 *  - pointer drag (desktop-only enhancement)
 *
 * Respects prefers-reduced-motion by rendering every stratum legibly at once
 * with no slider motion, and degrades gracefully without JS (SSR renders the
 * static layout below).
 */
export default function FocalPlane() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // 0..1 focal position along the track. SSR / no-JS keeps it at the first
  // stratum but the static fallback shows all of them anyway.
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  const total = STRATA.length;
  // Active stratum index derived from progress (split the track into N bands).
  const activeIndex = Math.min(total - 1, Math.floor(progress * total));

  // --- reduced motion ---------------------------------------------------------
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useLayoutEffect(() => setMounted(true), []);

  // --- scroll → progress ------------------------------------------------------
  const recompute = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    // Distance the section can scroll while pinned-ish in view.
    const scrollable = rect.height - vh;
    if (scrollable <= 0) {
      setProgress(0);
      return;
    }
    // How far the top of the section has travelled past the top of the viewport.
    const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
    setProgress(scrolled / scrollable);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(recompute);
    };
    recompute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [recompute, reducedMotion]);

  // Scroll so a given stratum index lands in focus (keyboard / click driver).
  const focusStratum = useCallback(
    (index: number) => {
      const el = sectionRef.current;
      if (!el) return;
      const clamped = Math.min(total - 1, Math.max(0, index));
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      // Aim for the centre of the target band.
      const target = (clamped + 0.5) / total;
      const top = window.scrollY + rect.top + target * scrollable;
      window.scrollTo({
        top,
        behavior: reducedMotion ? "auto" : "smooth",
      });
    },
    [reducedMotion, total]
  );

  // --- keyboard ---------------------------------------------------------------
  const onTrackKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
      case "PageDown":
        e.preventDefault();
        focusStratum(activeIndex + 1);
        break;
      case "ArrowUp":
      case "ArrowLeft":
      case "PageUp":
        e.preventDefault();
        focusStratum(activeIndex - 1);
        break;
      case "Home":
        e.preventDefault();
        focusStratum(0);
        break;
      case "End":
        e.preventDefault();
        focusStratum(total - 1);
        break;
    }
  };

  // --- pointer drag (desktop enhancement) -------------------------------------
  const dragging = useRef(false);
  const onPointerDown = (e: React.PointerEvent) => {
    if (reducedMotion) return;
    // Only fine pointers (mouse / trackpad) — touch keeps native scroll.
    if (e.pointerType === "touch") return;
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    dragFromClientY(e.clientY);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    dragFromClientY(e.clientY);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };
  const dragFromClientY = (clientY: number) => {
    const track = trackRef.current;
    const el = sectionRef.current;
    if (!track || !el) return;
    const r = track.getBoundingClientRect();
    const ratio = Math.min(Math.max((clientY - r.top) / r.height, 0), 1);
    const scrollable = el.getBoundingClientRect();
    const total = scrollable.height - window.innerHeight;
    if (total <= 0) return;
    const top = window.scrollY + scrollable.top + ratio * total;
    window.scrollTo({ top, behavior: "auto" });
  };

  // Static mode = reduced motion OR not-yet-mounted (SSR / no JS).
  const staticMode = reducedMotion || !mounted;

  // Focal line vertical position within the track (percentage).
  const linePct = staticMode ? 50 : progress * 100;

  return (
    <section
      ref={sectionRef}
      aria-label="Areas of work, focused one layer at a time"
      // Tall section gives scroll room; sticky inner keeps the canvas in view.
      className="relative w-full"
      style={{ height: staticMode ? "auto" : `${100 + total * 70}vh` }}
    >
      <div
        className={[
          "flex min-h-screen w-full items-center",
          staticMode ? "static py-24" : "sticky top-0 overflow-hidden",
        ].join(" ")}
      >
        <div className="mx-auto w-full max-w-5xl px-6 lg:px-10">
          <p className="mb-10 font-mono text-xs uppercase tracking-[0.2em] text-[#6E7275]">
            {staticMode ? "the stack" : "scroll to focus"}
          </p>

          {staticMode ? (
            // ---- STATIC FALLBACK: all strata legible at once -----------------
            <div className="space-y-12">
              {STRATA.map((s, i) => (
                <StratumRow
                  key={s.id}
                  stratum={s}
                  index={i}
                  total={total}
                  focused
                  staticMode
                />
              ))}
            </div>
          ) : (
            // ---- FOCAL PLANE: line travels, one stratum in focus -------------
            <div className="relative grid grid-cols-[auto_1fr] gap-6 lg:gap-12">
              {/* The slider track + razor-thin focal line. */}
              <div
                ref={trackRef}
                role="slider"
                tabIndex={0}
                aria-label="Focal plane"
                aria-valuemin={1}
                aria-valuemax={total}
                aria-valuenow={activeIndex + 1}
                aria-valuetext={`${STRATA[activeIndex].name} in focus`}
                onKeyDown={onTrackKeyDown}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                className="relative h-[60vh] w-8 cursor-ns-resize outline-none focus-visible:ring-2 focus-visible:ring-[#EAE6DF] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1C1C1A]"
              >
                {/* faint full-height guide */}
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#6E7275]/25"
                />
                {/* the razor-thin focal line */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 h-px w-full bg-[#EAE6DF] shadow-[0_0_12px_rgba(234,230,223,0.45)] transition-[top] duration-150 ease-out"
                  style={{ top: `${linePct}%` }}
                />
              </div>

              {/* The strata, vertically distributed. */}
              <div className="flex h-[60vh] flex-col justify-between py-2">
                {STRATA.map((s, i) => (
                  <StratumRow
                    key={s.id}
                    stratum={s}
                    index={i}
                    total={total}
                    focused={i === activeIndex}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
