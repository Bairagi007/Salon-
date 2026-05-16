import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#090706",
        espresso: "#17100d",
        champagne: "#f4dfbd",
        blush: "#ff8ab7",
        roseglow: "#ff4e9b",
        gold: "#d8ac5a",
        porcelain: "#fff8ef"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"]
      },
      boxShadow: {
        aura: "0 24px 90px rgba(255, 138, 183, 0.22)",
        gold: "0 18px 70px rgba(216, 172, 90, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
