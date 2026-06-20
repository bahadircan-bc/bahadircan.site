import type { Config } from "tailwindcss";

// "The Spatial Stack" design tokens — see docs/design.md.
// Palette names avoid collisions with Tailwind defaults:
//   obsidian = background, alabaster = primary text, ash = secondary text,
//   muted    = the Focal Plane line / hairlines / accent (never neon).
const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#1C1C1A",
        alabaster: "#EAE6DF",
        ash: "#8A8882",
        muted: "#6E7275",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
