# Project Summary — bahadircan-site

> Gathered from the existing repository, the CV (`public/cv_bahadircan.pdf`), and site
> content on 2026-06-20. This is the "who & what" reference. For the live working state
> and where we left off, see [`intro.md`](./intro.md).

---

## Who this site belongs to

**Bahadır Can** — Software Engineer (Computer Vision / Robotics; former full-stack web dev).

- **Title:** Software Engineer | Former Web Dev | Computer Vision
- **Location:** Istanbul, Turkey
- **Email:** bahadircan.bc@gmail.com
- **Phone:** +90-(542)-214-0597
- **Site:** www.bahadircan.site (deployed on **Vercel**)
- **Languages:** Turkish (native), English (native)

### Summary (his words, from CV)
Former full-stack web developer, currently working in computer vision and robotics. Specialties:
in-depth analysis and quick comprehension of codebases and new frameworks. Works with a
**"deploy first, perfect later"** strategy.

### Skills
Computer Vision · AI Cameras · On-Device / Edge Inference · Object Detection & Segmentation ·
OHS (Occupational Health & Safety) Applications · Robotics · Sensor Fusion · SLAM ·
Autonomous Navigation & Mapping · ROS 1 (Noetic) · ROS 2 (Humble / Jazzy) · Simulation
Environments · Machine Learning · Edge Device Optimization · Web/Web3 Development ·
API Development · Quick Code Comprehension · Software Optimization · Clean Code.

> **In short:** experienced across the full range of **AI cameras** and **robotics** — from
> on-device CV inference to SLAM-based autonomous navigation.

### Experience
- **Çözüm Makina** — Software Engineer (03/2024 – present). Two phases:
  - **AI cameras / computer vision (1+ year).** On-device (edge) inference and computer
    vision; real-time object detection & segmentation on embedded cameras (RKNN chipset);
    **OHS (occupational health & safety) applications using AI cameras**; RTLS for
    trucks/vehicles in a harbor using existing CCTV. Effectively the full range of "AI camera"
    work — detection, segmentation, on-device optimization, OHS use cases.
  - **Robotics (after the AI-camera phase).** Sensor fusion, **SLAM** algorithms, autonomous
    navigation (incl. a biped robot), **ROS 1 Noetic**, **ROS 2 Humble / Jazzy**, and
    **simulation environments**. Broadly comfortable across the robotics stack.
- **Freelance** — Full Stack Web Developer (06/2023 – 02/2024). Web & Web3 projects, UI/UX +
  MERN backend, migrated to Next.js (14 & 15) for SEO. **(This site is from this era.)**
- **Broad** — Lead Software Engineer (03/2023 – 05/2023). Hitchhiking/car-sharing mobile app;
  Google Geolocation & Places APIs.
- **ARGETURK** — Software Developer Intern (06/2021 – 09/2021). PCB defect/anomaly detection
  with classical CV; transform & template-matching algorithms; GERBER-to-image renderer.

### Education
- **Yıldız Teknik Üniversitesi** — B.Sc. Mechatronics Engineering (2018 – 2025). **Graduated.**

### Key accomplishments
- TÜBİTAK-sponsored indoor search-and-rescue quadcopter drone.
- "C Programming Language" course (Necati Ergin, C ve Sistem Programcıları Derneği).
- ETHGlobal Istanbul participant (hackathon).

### Socials
- GitHub: https://github.com/bahadircan-bc (repo: bahadircan.site)
- LinkedIn: https://www.linkedin.com/in/bahadır-can/
- X/Twitter: https://twitter.com/BahadirCaan
- Telegram: https://t.me/bbahadircan

---

## The previous site (REPLACED 2026-06-20)

> The site was rebuilt as the single-page "Spatial Stack" (see [`design.md`](./design.md), now
> live on Vercel). This section is kept as a historical record of the **old** build so nothing
> is lost — it no longer describes what's deployed.

A personal CV / portfolio site (the pre-rebuild version):

### Tech stack
- **Next.js 14.2.35** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS 3** (compiled manually: `input.css` → `output.css`) + `@tailwindcss/typography`
- **Framer Motion 10** for animations
- **MongoDB** (`mongodb` driver) — stores blog posts & project list
- `react-remark` + `remark-gfm` + `rehype-highlight` for markdown blog rendering
- `react-responsive-carousel`, `react-tabs`, `react-lines-ellipsis`
- `@svgr/webpack` for importing SVGs as React components
- `sharp` 0.33.1 for image optimization
- **Ahrefs** analytics script in `layout.tsx`
- Font: **Cairo** (next/font/google)
- Deploy: **Vercel** (also has a leftover `netlify.toml`)

### Routes / structure (`src/app`, App Router)
- `(home)/` — Hero (`whoami?` + floating animated tech-stack icons), Timeline (scroll-driven
  animated SVG path through his career: YTU → Argetürk → Broad → Freelance → "More to come"),
  Projects accordion.
- `aboutme/` — Header, Elevator Pitch (photo + bio), WhyMe (tabbed: Web / Web3 / Mobile /
  Desktop / Engineering).
- `projects/` — list (`page.tsx`) + `[slug]` detail with image carousel. Data from MongoDB.
- `blog/` — list + `[slug]` markdown post page. Data from MongoDB.
- `contact/` — contact methods + QR codes (WhatsApp, Telegram, Instagram, Discord, GitHub,
  Twitter, LinkedIn).
- `components/` — shared `Navbar`, `Footer`.

### Data layer
`src/db/dbReq.tsx` — connects to MongoDB (`MONGODB_URI` env var), DB `bahadircan-blog-posts`,
collections `project-list` and `blog-posts`. `getProjectData()` and `getBlogData()`.

### Assets
`src/assets/` — many tech-stack SVG icons (`dropdownIcons/`), social/contact icons, QR codes,
background images, profile photo (`IMG_2673.jpeg`), CV PDF at `public/cv_bahadircan.pdf`.

### Known cruft / notes
- `netlify.toml` present though deploy is Vercel.
- Tailwind is built via a manual script rather than the standard PostCSS pipeline.
- Recent commits fixed a React Server Components CVE and downgraded sharp.
