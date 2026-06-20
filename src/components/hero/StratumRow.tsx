"use client";

import { Stratum } from "@/content/strata";

interface StratumRowProps {
  stratum: Stratum;
  index: number;
  total: number;
  /** Whether this stratum is the one currently in focus. */
  focused: boolean;
  /**
   * When true the component renders fully static (all strata legible at once).
   * Used for prefers-reduced-motion and the no-JS / SSR fallback.
   */
  staticMode?: boolean;
}

/**
 * One layer in the spatial stack. When in focus its fields are revealed and it
 * sits in full contrast; out of focus it recedes (dimmed, fields collapsed).
 */
export default function StratumRow({
  stratum,
  index,
  total,
  focused,
  staticMode = false,
}: StratumRowProps) {
  const revealed = staticMode || focused;

  return (
    <div
      id={stratum.id}
      role="group"
      aria-label={`${stratum.name} — ${stratum.caption}`}
      aria-current={!staticMode && focused ? "true" : undefined}
      className={[
        "relative w-full select-none",
        "transition-opacity duration-500 ease-out motion-reduce:transition-none",
        // Out-of-focus strata recede: lower opacity (no blur — reads cleaner).
        revealed ? "opacity-100" : "opacity-40 motion-reduce:opacity-100",
      ].join(" ")}
    >
      <div className="flex items-baseline gap-4">
        <span
          aria-hidden="true"
          className="font-mono text-xs text-muted tabular-nums"
        >
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <h3 className="font-sans text-2xl font-medium tracking-tight text-alabaster lg:text-3xl">
          {stratum.name}
        </h3>
        <span className="font-mono text-xs text-ash hidden sm:inline">
          {stratum.caption}
        </span>
      </div>

      {/* Fields — revealed only when this stratum is in focus (or static mode). */}
      <ul
        className={[
          "mt-3 flex flex-wrap gap-x-5 gap-y-1.5 overflow-hidden",
          "transition-all duration-500 ease-out motion-reduce:transition-none",
          revealed
            ? "max-h-40 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-1 motion-reduce:max-h-40 motion-reduce:opacity-100 motion-reduce:translate-y-0",
        ].join(" ")}
        // Hide collapsed fields from assistive tech & tab order when receded.
        aria-hidden={!revealed ? "true" : undefined}
      >
        {stratum.fields.map((field) => (
          <li
            key={field}
            className="font-sans text-sm text-ash lg:text-base"
          >
            {field}
          </li>
        ))}
      </ul>
    </div>
  );
}
