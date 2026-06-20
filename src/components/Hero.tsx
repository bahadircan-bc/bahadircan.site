"use client";

import FocalPlane from "./hero/FocalPlane";

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
    <div className="w-full bg-[#1C1C1A] text-[#EAE6DF]">
      {/* --- Statement panel --- */}
      <header className="flex min-h-screen w-full items-center">
        <div className="mx-auto w-full max-w-5xl px-6 lg:px-10">
          <p className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.2em] text-[#8A8882]">
            <span>R&amp;D Engineer</span>
            <span aria-hidden="true" className="text-[#6E7275]">
              ·
            </span>
            <span>Istanbul</span>
          </p>

          <h1 className="font-sans text-4xl font-medium leading-[1.05] tracking-tight text-[#EAE6DF] sm:text-6xl lg:text-7xl">
            Bahadır Can
          </h1>

          <p className="mt-8 max-w-xl font-sans text-xl font-light leading-snug tracking-tight text-[#8A8882] sm:text-2xl lg:text-3xl">
            From electrons to interface.
          </p>

          <p
            aria-hidden="true"
            className="mt-16 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[#6E7275]"
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
