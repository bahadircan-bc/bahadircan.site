# design.md — The Spatial Stack

> Locked 2026-06-20. This is the build spec for the rebuilt bahadircan-site. For the person &
> old-site reference see [`summary.md`](./summary.md); for project status see
> [`intro.md`](./intro.md).

---

## Thesis

Bahadır's edge isn't a long tool list — it's that he understands **space, perception, and
interfaces as one continuous stack**, from how a robot reads a room to how a human reads a
screen. The site presents his expertise as a single unified stack, not disjoint categories.

**Aesthetic:** minimal, "industrial luxury," understated *if-you-know-you-know* confidence.
Expansive whitespace and silence are the flex — the page never shouts. Warm-dark, refined,
fast.

**What a visitor must grasp in seconds:** an experienced R&D engineer whose range spans
hardware to interface.

---

## Signature element — The Focal Plane

A single razor-thin horizontal line across an oversized, near-empty canvas. It behaves like a
**focal / depth-of-field slider** (a quiet nod to camera focus, LiDAR, depth perception). As
the line moves through the page, it focuses on different **strata** of the skillset.

```
            Bahadır Can — R&D Engineer

  ──────────────────( ʘ )──────────────────   ← Focal Plane

        Perception · Compute · Interface
```

- **One signature only.** No 3D canvas, no live FPS/latency HUD, no stacked hero gimmicks.
- **Pure, fast CSS + lightweight JS.** No heavy rendering, no lag.
- **Primary driver = scroll** (the line tracks scroll progress and the active stratum reveals).
  Drag is an *enhancement* on desktop, not required.
- **Accessibility / degradation (non-negotiable):**
  - Fully keyboard-navigable; visible focus states.
  - `prefers-reduced-motion`: no slider motion — show all three strata at once, statically.
  - Mobile: scroll-driven (no fiddly drag); all strata reachable.
  - Works with JS disabled to the extent of showing all content (progressive enhancement).

---

## The three strata (breadth, compressed & legible)

Six+ fields compress into three honest layers. This is the corrected taxonomy (locked):

| Stratum | Fields |
|---------|--------|
| **Perception** | AI cameras · computer vision · SLAM · sensor fusion · edge / on-device inference |
| **Compute** | ML / AI · ROS 1 (Noetic) / ROS 2 (Humble · Jazzy) · autonomous navigation · electronics / embedded |
| **Interface** | full-stack web (Next.js, MERN) · web3 (smart contracts, dApps) · 3D design |

No skill badges, no logo wall — the strata + a typeset index do the work.

---

## Palette — "Industrial Luxury" (warm-dark, locked)

| Role | Name | Hex | Use |
|------|------|-----|-----|
| Background | Obsidian Chalk | `#1C1C1A` | Deep, warm, velvety near-black (never pure `#000`). |
| Primary text | Warm Alabaster | `#EAE6DF` | Premium broken-white; matte-paper feel. |
| Line / accent | Muted Slate | `#6E7275` | The Focal Plane line + minor structural borders. **No neon, ever.** |
| Secondary text | Dark Ash | `#8A8882` | Low-contrast metadata; keeps hierarchy quiet. |

Hairlines are 1px. Contrast for body copy must stay legible (Alabaster on Obsidian is fine;
keep Dark Ash for non-essential text only).

---

## Typography

- **Headings / display:** Inter (or Neue Montreal if licensed), **Medium**, tightly tracked
  (`letter-spacing: -0.03em`). **Sentence case or lowercase — never all-caps** (shouting),
  never serif (too editorial/agency). Swiss-modernist "industrial catalog" feel.
- **Body & data:** a refined monospace — **JetBrains Mono** / Geist Mono (SF Mono if on
  Apple). Used sparingly for the project index and technical notes, generous line-height.

---

## Structure

The whole site behaves like a **beautifully typeset index**, not an image-card grid.

- **Hero:** name + `R&D Engineer` + the Focal Plane + the three strata.
- **Project index:** a single clean table. Each project tagged by **operational depth**, e.g.
  `[Perception + Interface]`, rather than sorted into one bucket.
- **Hover interaction:** hovering a project title **dims the opacity of all other rows**,
  isolating that one — no video, no heavy animation.
- Silent, blindingly fast, confident.

---

## Tech stack (as built)

- **Next.js 14 App Router + TypeScript**.
- **Tailwind CSS** via the standard PostCSS pipeline; colors are CSS-variable theme tokens.
- The Focal Plane is **CSS + light JS** (rAF scroll listener) — no Three.js / R3F.
- **No Framer Motion, no MongoDB, no @svgr** — all dropped (see deviations below).

---

## As built (decisions resolved + deviations from the original plan)

Shipped to production 2026-06-20. See `intro.md` Status Log for the build narrative.

- **Single page** (`src/app/page.tsx`) — no separate about/projects/blog/contact routes.
- **Content is local**, not MongoDB: `src/content/projects.ts` (authored from the CV) and
  `src/content/strata.ts`. The blog was dropped entirely; the whole `src/db` layer removed.
- **Components:** `SiteHeader`, `Hero` (+ `hero/FocalPlane`, `hero/StratumRow`), `ProjectIndex`,
  `SiteFooter`. Types in `src/lib/types.ts`.
- **Dark + light theme** (added beyond the original spec): CSS-variable tokens in `globals.css`
  (`--bg/--fg/--fg-muted/--fg-faint/--line`) → Tailwind colors `obsidian/alabaster/ash/muted/
  line`; toggle in `SiteHeader` (persists in localStorage, respects system, no-flash inline
  script in `layout.tsx`). Contrast was raised vs. the first pass.
- **Focal Plane tuning:** line tracks scroll 1:1 (no chasing transition), focus snaps to the
  nearest of 3 strata aligned to the row.
- **Dropped deps/assets:** Framer Motion, @svgr/webpack (footer icons are inline SVG), mongodb,
  react-remark/gfm, rehype-highlight, react-tabs/-responsive-carousel/-lines-ellipsis,
  `src/assets/*`, `netlify.toml`.
- Hero copy = "From electrons to interface."; strata captions = "how machines see / decide /
  how people connect."

### Possible follow-ups (not yet done)
- Copy tweaks (`src/content/projects.ts`, hero line); light-bg warmth / faint-label contrast;
  default-theme choice (currently follows system).
