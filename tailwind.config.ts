import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: "#4b2b16",
        cocoa: "#28180e",
        chile: "#b92f22",
        coral: "#e85d3f",
        cream: "#fff7ed",
        gold: "#f5b041",
        harbor: "#12333a",
        maize: "#f2c15d",
        orange: "#c94a23",
        sand: "#f9dfad",
        verde: "#2f7d59",
        tinta: "#1f2933",
      },
      boxShadow: {
        soft: "0 22px 60px rgba(40, 24, 14, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
