"use client";

import { useState } from "react";
import { projects } from "@/content/projects";
import type { Project } from "@/lib/types";

function DepthTags({ depth }: { depth: Project["depth"] }) {
  return (
    <span className="font-mono text-xs text-muted tracking-wide whitespace-nowrap">
      [{depth.join(" + ")}]
    </span>
  );
}

export default function ProjectIndex() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  // Sort newest-first: parse leading year digits for comparison
  const sorted = [...projects].sort((a, b) => {
    const yearA = parseInt(a.year.replace(/\D.*/, ""), 10);
    const yearB = parseInt(b.year.replace(/\D.*/, ""), 10);
    return yearB - yearA;
  });

  return (
    <section id="work" aria-labelledby="work-heading" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section heading */}
        <h2
          id="work-heading"
          className="font-sans text-sm font-medium tracking-tight text-ash mb-10"
        >
          selected work
        </h2>

        {/* Hairline top border */}
        <div className="border-t border-line border-opacity-60" />

        <ul role="list">
          {sorted.map((project) => {
            const isDimmed =
              hoveredSlug !== null && hoveredSlug !== project.slug;

            return (
              <li
                key={project.slug}
                className={[
                  "group border-b border-line border-opacity-60",
                  "transition-opacity",
                  // Respect prefers-reduced-motion: transition is short (150ms) and opacity-only,
                  // so it qualifies as "mild" per the spec — but we also apply motion-reduce
                  // class to remove the transition entirely for users who prefer no motion.
                  "motion-reduce:transition-none",
                  isDimmed ? "opacity-30" : "opacity-100",
                ].join(" ")}
                onMouseEnter={() => setHoveredSlug(project.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
                onFocus={() => setHoveredSlug(project.slug)}
                onBlur={() => setHoveredSlug(null)}
              >
                {/* Keyboard-focusable anchor wrapping the row content */}
                <a
                  href={project.href ?? `#${project.slug}`}
                  aria-label={`${project.title}, ${project.year}${project.context ? `, ${project.context}` : ""}`}
                  className={[
                    "flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6",
                    "py-5",
                    // Remove default outline (globals.css provides :focus-visible ring)
                    "outline-none",
                  ].join(" ")}
                >
                  {/* Year */}
                  <span className="font-mono text-xs text-ash shrink-0 w-16 sm:w-20 tabular-nums">
                    {project.year}
                  </span>

                  {/* Title + summary */}
                  <span className="flex-1 min-w-0">
                    <span className="block font-sans text-sm font-medium text-alabaster tracking-tight leading-snug">
                      {project.title}
                    </span>
                    <span className="block font-sans text-xs text-ash mt-0.5 leading-relaxed">
                      {project.summary}
                    </span>
                  </span>

                  {/* Context + depth tags — right-aligned on desktop */}
                  <span className="flex flex-col sm:items-end gap-1 shrink-0">
                    {project.context && (
                      <span className="font-mono text-xs text-ash">
                        {project.context}
                      </span>
                    )}
                    <DepthTags depth={project.depth} />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
