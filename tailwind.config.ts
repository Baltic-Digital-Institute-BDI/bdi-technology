import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        granat: { DEFAULT: "#0a192f", deep: "#112240" },
        mint: "#64ffda",
        szary: { DEFAULT: "#8892b0", light: "#ccd6f6" },
        accent: { amber: "#f59e0b", green: "#10b981", red: "#ef4444", blue: "#3b82f6" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        '8xl': '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
