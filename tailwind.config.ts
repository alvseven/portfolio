import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        mono: ["var(--font-sora)"],
        code: ["var(--font-fira-code)"],
      },
      textColor: {
        primary: "hsla(var(--text-primary))",
        title: "hsla(var(--text-title))",
        [`title-secondary`]: "hsla(var(--text-title-secondary))",
        highlight: "hsla(var(--text-highlight))",
      },
      backgroundColor: {
        background: "hsla(var(--background))",
      },
    },
  },
  plugins: [],
};
export default config;
