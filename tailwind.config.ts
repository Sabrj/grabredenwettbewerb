import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aubergine: {
          50:  "#eeecf4",
          100: "#d5d0e6",
          200: "#bbb3d8",
          300: "#9f96c8",
          400: "#7a6faa",
          500: "#352741",
          600: "#322944",
          700: "#292238",
          800: "#1f1a2b",
          900: "#14111c",
          DEFAULT: "#352741",
        },
        creme: {
          50:  "#fdfcfa",
          100: "#f8f4ed",
          200: "#f2ede4",
          300: "#ebe3d6",
          DEFAULT: "#f2ede4",
        },
        gold: {
          300: "#e8cb78",
          400: "#ddb94f",
          500: "#d4a843",
          600: "#b8902e",
          DEFAULT: "#d4a843",
        },
        grave: {
          500: "#5a4a42",
          DEFAULT: "#5a4a42",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        body:  ["Lora", "Georgia", "serif"],
      },
      animation: {
        "fade-in":    "fadeIn 0.6s ease-out forwards",
        "slide-up":   "slideUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn:  { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(30px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
      boxShadow: {
        monument: "0 20px 60px -10px rgba(58,48,80,0.35), 0 8px 24px -4px rgba(58,48,80,0.18)",
        subtle:   "0 4px 16px -2px rgba(58,48,80,0.12)",
        gold:     "0 4px 24px -4px rgba(212,168,67,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
