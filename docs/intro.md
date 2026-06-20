# intro.md — START HERE

> **You are a Claude instance that was just told "read intro.md".** This file is your
> orientation. Read it fully, then read the docs it points to, then greet the user with a
> short recap in this shape:
>
> > "I understood **\<who this is for / what the project is\>**. We were doing
> > **\<current goal + where we left off\>**. What do you want to do next?"
>
> Keep that recap to a few sentences. Do not start changing code until the user tells you
> what to do next.

---

## What is this project?

The personal CV / portfolio website of **Bahadır Can**, deployed on **Vercel** at
www.bahadircan.site. It is a Next.js 14 (App Router) + TypeScript + Tailwind site.

**The current mission: we are starting over on the design.** The old site still exists in the
repo as reference, but Bahadır wants a fresh design and a clean rebuild.

---

## The documents — what each one is for

| File | Purpose |
|------|---------|
| `docs/intro.md` (this file) | Orientation + living status log. **Always up to date.** Read first. Update it at the end of every working session. |
| `docs/summary.md` | Static reference: who Bahadır is (CV details, experience, socials) and a full description of the **old** site (stack, routes, data layer, assets). Read it to understand the person and what's being replaced. |
| `docs/design.md` | **The locked build spec** for the new design ("The Spatial Stack" — warm-dark industrial-luxury, Focal Plane signature, 3 strata). Read it before building any UI. |
| `.claude/CLAUDE.md` | Auto-generated CodeGraph usage note (how to query the code graph). |
| `public/cv_bahadircan.pdf` | Source of truth for Bahadır's CV content. |

> When new docs are added, add a row here so the next instance knows what it stands for.

---

## Working conventions (IMPORTANT — read before acting)

1. **Commits / pushes have NO co-author trailer.** Do **not** add `Co-Authored-By: Claude ...`
   to commit messages. Plain commit messages only.
2. **Only commit or push when Bahadır asks.** Don't push proactively.
3. **Deploy target is Vercel** (pushing to the default branch deploys). There is a stray
   `netlify.toml` — ignore it / it can be removed.
4. **CodeGraph is the primary code-navigation tool** for this repo (see next section). Reach
   for it before grep/find when locating or understanding code.
5. After any meaningful work, **update the Status Log at the bottom of this file** so the next
   instance can pick up seamlessly.

---

## CodeGraph (code intelligence for this repo)

The repo is indexed by **CodeGraph** (`.codegraph/` at the repo root, git-ignored).

- **It runs under Node v24.13.0**, not the default Node. The MCP server in `.mcp.json` is
  pinned to the absolute Node 24 path so Claude Code can launch it regardless of the active
  Node version.
- **MCP tools** (preferred when available): `codegraph_explore` (best one-shot: relevant
  symbols' source + call paths), `codegraph_node`, `codegraph_search`, `codegraph_callers`,
  `codegraph_callees`, `codegraph_impact`, `codegraph_files`, `codegraph_status`. These are
  pre-allowed in `.claude/settings.json`.
- **Shell fallback** (always works — prefix PATH with Node 24):
  ```bash
  export PATH="$HOME/.nvm/versions/node/v24.13.0/bin:$PATH"
  codegraph explore "<symbols or question>"
  codegraph sync     # after edits made outside an MCP session
  ```
- **Reindex after big changes:** `codegraph sync` (incremental) or `codegraph init` (rebuild).

---

## Status Log (newest first)

### 2026-06-20 — SHIPPED to production + theming/polish
- Tuned the Focal Plane: line tracks scroll 1:1 (removed the chasing transition → no latency);
  focus snaps to the nearest of 3 strata, line aligned to the focused row (fixed the phantom
  4th stop); shorter scroll distance per stratum.
- Added a **dark/light theme system**: CSS-variable tokens in `globals.css`
  (`--bg/--fg/--fg-muted/--fg-faint/--line`), Tailwind colors map to them
  (`obsidian/alabaster/ash/muted/line`), toggle in `SiteHeader` (persists in localStorage,
  respects system, no-flash inline script in `layout.tsx`). **Raised contrast** in both themes.
  Refactored all components off hard-coded hex onto tokens; `SiteFooter` rewritten with classes.
- Bahadır approved; **pushed `main` to origin → Vercel production deploy** (bahadircan.site).
- **Where we left off / next up:** live. Possible follow-ups: copy tweaks
  (`src/content/projects.ts`, hero line), tune light-bg warmth / faint-label contrast, or
  default-theme choice (currently follows system).

### 2026-06-20 — Rebuild BUILT & verified locally (not yet pushed)
- Migrated old multi-page MongoDB site → new single-page "Spatial Stack" via multi-agent
  orchestration (3 subagents in git worktrees: Hero/Focal-Plane, Project Index, Header/Footer).
  Plan: `~/.claude/plans/luminous-conjuring-pebble.md`.
- New structure: `src/app/page.tsx` composes `SiteHeader` + `Hero` (+ `hero/FocalPlane`,
  `hero/StratumRow`) + `ProjectIndex` + `SiteFooter`. Content: `src/content/strata.ts`,
  `src/content/projects.ts` (authored from CV — review/edit anytime). Types: `src/lib/types.ts`.
- Dropped MongoDB, blog, and unused deps (framer-motion, svgr, react-remark/tabs/carousel, …);
  switched to standard Tailwind pipeline; removed old routes/assets + netlify.toml.
- **Verified:** `npm run build` clean; Focal Plane focus-on-scroll, project index, footer all
  render correctly desktop + mobile (no horizontal overflow, CDP-checked); reduced-motion +
  no-JS fall back to a static all-strata layout.
- **Committed locally on `main` (3 commits), NOT pushed.** Pushing = Vercel production deploy.
- **Where we left off / next up:** get Bahadır's go-ahead to push to production; possible
  content tweaks to `src/content/projects.ts` and hero copy first.

### 2026-06-20 — Design LOCKED: "The Spatial Stack"
- After several rounds (incl. concepts from web Claude), locked the design direction. Full
  spec in `docs/design.md`.
- **Direction:** warm-dark "industrial luxury," IYKYK minimalism. Signature = the **Focal
  Plane** (one thin scroll-driven focal line, no 3D/HUD). Breadth compressed into **three
  strata: Perception · Compute · Interface**. Palette: Obsidian Chalk `#1C1C1A` + Warm
  Alabaster `#EAE6DF` + Muted Slate `#6E7275`, no neon. Type: Inter (tight, sentence/lower
  case) + a refined mono. Body = a typeset project index with opacity-dim hover.
- Decisions confirmed by Bahadır: **warm-dark** + the **corrected taxonomy**.
- **Where we left off / next up:** start building. Open questions live at the bottom of
  `design.md` (which old sections survive, hero/stratum copy, keep MongoDB or go local).

### 2026-06-20 — Education: graduated
- Bahadır has **graduated** from YTU (B.Sc. Mechatronics, 2018–2025). Updated `summary.md`.

### 2026-06-20 — Expanded Çözüm Makina experience in summary.md
- Bahadır added detail: his current role has two phases — (1) **AI cameras / computer vision
  (1+ year):** on-device/edge inference, detection & segmentation, OHS applications with AI
  cameras; (2) **robotics:** sensor fusion, SLAM, ROS 1 Noetic, ROS 2 Humble/Jazzy, simulation
  environments. Summary: experienced across the full range of AI cameras + robotics.
- Updated `docs/summary.md` (experience + skills). No code changes.

### 2026-06-20 — Project bootstrapped for the rebuild
- Read the existing repo + CV; wrote `docs/summary.md` (person + old-site reference).
- Created this `docs/intro.md` as the living catch-up doc.
- Installed & indexed **CodeGraph** (Node 24): `.codegraph/` built (384 nodes, 728 edges),
  MCP server registered in `.mcp.json` (pinned to Node 24), permissions added in
  `.claude/settings.json`, `.codegraph/` git-ignored.
- **Nothing in the site code has changed yet.** The old design is fully intact.
- **Where we left off / next up:** decide the **new design direction** and start the rebuild.
  No `docs/design.md` exists yet → the design phase has not started.

> **Next instance:** greet Bahadır with the recap (see top of file) and ask what he wants to
> do next — most likely: kick off the new design.
