import type { Config } from "tailwindcss";

// "The Spatial Stack" design tokens — see docs/design.md.
// Colors are CSS-variable backed so they flip between dark/light themes
// (variables defined in src/app/globals.css). Token roles:
//   obsidian  = background
//   alabaster = primary text / the Focal Plane line
//   ash       = secondary text (readable)
//   muted     = faint labels / metadata
//   line      = hairlines, borders, the focal guide
const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "rgb(var(--bg) / <alpha-value>)",
        alabaster: "rgb(var(--fg) / <alpha-value>)",
        ash: "rgb(var(--fg-muted) / <alpha-value>)",
        muted: "rgb(var(--fg-faint) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
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
