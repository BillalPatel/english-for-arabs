import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //       "gradient-conic":
  //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     },
  //   },
  //   // colors: {
  //   //   cyan: "#66D2CF",
  //   //   darkCyan: "#0E8784",
  //   //   darkGreyBlue: "#333D4B",
  //   //   paleOrange: "#FDD6BA",
  //   //   lightCream: "#FEFCF7",
  //   //   lightGrey: "#F4F1EB",
  //   //   lighterGrey: "#E2DEDB",
  //   //   grey: "#83888F",
  //   //   white: "#FFF",
  //   // },
  //   fontFamily: {
  //     // kumbhSans: ["Kumbh Sans"],
  //   },
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
  // },
  // plugins: [],
};

export default config;
