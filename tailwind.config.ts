import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#2f3685",
        secondary: "#5151b2",
        accent: "#131518",
        highlight: "#E1E8ED",
        error: "#FF0000",
        success: "#00FF00",
        warning: "#FFFF00",
        info: "#0000FF",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
