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
      lightGold: "#F8C91F",
      darkGrey: "#A9A9A9",
      lightGrey: "#F4F4F4",
      black: "#11324D",
      white: "#FCFAF1",
      offWhite: "#F8F8FF",
      red: "#EF4444",
      green: "#3CB371",
    },
    //   // fontSize: {
    //     // sm: "0.9375rem",
    //     // 1: "1rem",
    //     // "2xl": "1.5rem",
    //     // "3xl": "1.75rem",
    //     // "4xl": "2.5rem",
    //     // "5xl": "4.5rem",
    //   // },
    //     // borderRadius: {
    //       // default: 'rounded-2xl',
    //       // large: "0.625rem",
    //       // extraLarge: "0.625rem",
    //     // },
  },
  plugins: [],
};

export default config;
