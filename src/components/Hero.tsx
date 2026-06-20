"use client";

import { useEffect, useState } from "react";
import FocalPlane from "./hero/FocalPlane";
import useTypewriter from "@/hooks/useTypewriter";

const STATEMENT = "From electrons to interface.";

function Tagline() {
  const { typed, done } = useTypewriter(STATEMENT);
  const [caretGone, setCaretGone] = useState(false);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setCaretGone(true), 1200);
    return () => clearTimeout(t);
  }, [done]);

  return (
    <p className="mt-8 max-w-xl font-sans text-xl font-light leading-snug tracking-tight text-ash sm:text-2xl lg:text-3xl">
      {/* Full sentence for SEO / screen readers; the animated copy is hidden from AT. */}
      <span className="sr-only">{STATEMENT}</span>
      <span aria-hidden="true">
        {typed}
        <span
          className={`ml-0.5 inline-block h-[0.85em] w-[0.07em] translate-y-[0.08em] bg-current align-baseline transition-opacity duration-700 ${
            caretGone ? "opacity-0" : "caret-blink opacity-100"
          }`}
        />
      </span>
    </p>
  );
}

/**
 * The Spatial Stack — hero.
 *
 * Warm-dark, industrial-luxury minimalism. Silence and whitespace are the flex:
 * a name, a quiet label, one confident statement, and the signature Focal Plane
 * below it. No skill badges, no logo wall — breadth is shown through the three
 * strata the focal line brings into focus as you scroll.
 */
export default function Hero() {
  return (
    <div className="w-full bg-obsidian text-alabaster">
      {/* --- Statement panel --- */}
      <header className="flex min-h-screen w-full items-center">
        <div className="mx-auto w-full max-w-5xl px-6 lg:px-10">
          <p className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.2em] text-ash">
            <span>R&amp;D Engineer</span>
            <span aria-hidden="true" className="text-muted">
              ·
            </span>
            <span>Istanbul</span>
          </p>

          <h1 className="font-sans text-4xl font-medium leading-[1.05] tracking-tight text-alabaster sm:text-6xl lg:text-7xl">
            Bahadır Can
          </h1>

          <Tagline />

          <p
            aria-hidden="true"
            className="mt-16 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted"
          >
            scroll
          </p>
        </div>
      </header>

      {/* --- The signature: Focal Plane + the three strata --- */}
      <FocalPlane />
    </div>
  );
}
