import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        golestan: {
          black: "#000000",
          crimson: "#8B0000",
          crimsonDeep: "#4A0000",
          gold: "#C9A961",
          cream: "#F5F1E8",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        fa: ["var(--font-vazirmatn)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        smallcaps: "0.35em",
      },
    },
  },
  plugins: [],
};
export default config;
