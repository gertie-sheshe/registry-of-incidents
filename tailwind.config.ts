import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["EB Garamond", "serif"],
        sans: ["Source Sans 3", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      colors: {
        cream: "#F5F2EC",
        charcoal: "#2C2A25",
        secondary: "#7A7060",
        amber: {
          DEFAULT: "#8B5E3C",
          light: "#FAEEDA",
          deep: "#633806",
        },
        rule: "#D4C9B5",
        "annotation-bg": "#F0EBE0",
        "disputed-bg": "#EDE0D8",
        "disputed-text": "#6B3020",
        "closed-bg": "#ECEAE6",
        "closed-text": "#4A4640",
      },
    },
  },
  plugins: [],
};
export default config;
