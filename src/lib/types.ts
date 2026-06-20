// Shared contracts for the single-page rebuild ("The Spatial Stack").
// Owned by the foundation; consumed by content + components. Do not change
// the shapes in a worktree without coordinating — they are the integration contract.

/** The three strata that breadth compresses into. See docs/design.md. */
export type Stratum = "Perception" | "Compute" | "Interface";

/** One project row in the typeset index. Keep `summary` to a single line. */
export interface Project {
  /** Stable id / anchor-friendly slug. */
  slug: string;
  title: string;
  /** Display year or range, e.g. "2024" or "2024–25". */
  year: string;
  /** Optional role/context, e.g. "Çözüm Makina". */
  context?: string;
  /** One-line description for the index. */
  summary: string;
  /** Operational depth tags, e.g. ["Perception", "Compute"]. */
  depth: Stratum[];
  /** Optional tech tags. */
  stack?: string[];
  /** Optional external link. */
  href?: string;
}
