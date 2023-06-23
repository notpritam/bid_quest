/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        asap: ["Asap Condensed", "sans-serif"],
        averia: ["Averia Serif Libre", "cursive"],
        inter: ["Inter", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        main: "#040414",
        mainDark: "#ffffff",
        bgGray: "#F5F5F5",
        bgGrayDark: "#507193",
        bgText: "#C4D0DD",
        bgTextDark: "#253F5F",
        borderColor: "#DEDEDE",
        borderColorDark: "#696B78",
        cardTitleBg: "#040414",
        textBid: "#858585",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
    },
  },
  plugins: [],
};
