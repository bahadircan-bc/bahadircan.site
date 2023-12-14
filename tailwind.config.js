/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
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
      fontFamily: {
        sans: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
}

