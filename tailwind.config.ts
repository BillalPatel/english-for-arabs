import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: "#035B73",
      brown: "#C2912E",
      gold: "#FEB601",
      darkGrey: "#A9A9A9",
      lightGrey: "#F4F4F4",
      black: "#11324D",
      white: "#FCFAF1",
      offWhite: "#F8F8FF",
      red: "#EF4444",
      green: "#3CB371",
    },
  },
  plugins: [],
};

export default config;
