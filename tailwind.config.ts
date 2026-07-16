import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary — deep harvest green (brand, trust, sustainability)
        harvest: {
          50: "#f2f7f2",
          100: "#dfeadf",
          200: "#b9d3ba",
          300: "#8fb790",
          400: "#5f9663",
          500: "#3f7a45",
          600: "#2e6135",
          700: "#264e2c",
          800: "#1f3f24",
          900: "#16301b",
        },
        // Accent — turmeric / mango (food, warmth, urgency)
        turmeric: {
          50: "#fff8ea",
          100: "#ffedc2",
          200: "#ffdb8a",
          300: "#ffc24d",
          400: "#feaa1f",
          500: "#f28f0c",
          600: "#d06f08",
          700: "#a8520b",
          800: "#87410f",
          900: "#6f3610",
        },
        // Neutral — warm paper
        paper: {
          50: "#fbfaf6",
          100: "#f4f2ea",
          200: "#e9e5d6",
          300: "#d8d2bd",
          400: "#b9b09a",
          500: "#948a74",
          600: "#6f6754",
          700: "#544e40",
          800: "#39352c",
          900: "#211f1a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      borderRadius: {
        card: "1.1rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(33,31,26,0.06), 0 8px 24px -12px rgba(33,31,26,0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
