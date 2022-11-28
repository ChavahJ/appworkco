/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Poppins",
        "-apple-system",
        "blinkmacsystemfont",
        "Helvetica\\ Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      serif: ["Lora", "Garamond", "Georgia", "Times\\ New\\ Roman", "serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      gray: {
        50: "#f7f7f7",
        100: "#f4f4f4",
        200: "#eeeeee",
        300: "#e3e3e3",
        400: "#d2d2d2",
        500: "#b1b1b1",
        600: "#8f8f8f",
        700: "#565656",
        800: "#404040",
        900: "#2b2b2b",
      },
      green: {
        50: "#f4fcf8",
        100: "#e8f8f0",
        200: "#c7efda",
        300: "#a5e5c4",
        400: "#61d197",
        500: "#1dbd6b",
        600: "#1aaa60",
        700: "#117140",
        800: "#0d5530",
        900: "#093920",
      },
      forest: {
        50: "#f2f5f5",
        100: "#e7ebeb",
        200: "#c2ccce",
        300: "#9eacb0",
        400: "#566f75",
        500: "#04333b",
        600: "#122d34",
        700: "#0a1e22",
        800: "#07171a",
        900: "#040f12",
      },
      red: {
        50: "#fff4f4",
        100: "#ff3939",
        200: "#ffc7c7",
        300: "#fea6a6",
        400: "#fe6363",
        500: "#fd2020",
        600: "#e41d1d",
        700: "#981313",
        800: "#720e0e",
        900: "#4c0a0a",
      },
      orange: {
        50: "#fff7f4",
        100: "#ffefe9",
        200: "#ffd7c7",
        300: "#feb6a6",
        400: "#fe8363",
        500: "#fd5e20",
        600: "#e4551d",
        700: "#983813",
        800: "#722a0e",
        900: "#4c140a",
      },
      yellow: {
        50: "#fffcf2",
        100: "#fff9ec",
        200: "#fff1bf",
        300: "#ffe999",
        400: "#ffd84d",
        500: "#ffc700",
        600: "#e6b300",
        700: "#997700",
        800: "#735a00",
        900: "#4d3c00",
      },
      purple: {
        50: "#f7f7fe",
        100: "#fff9ec",
        200: "#d8d5f9",
        300: "#c1bcf6",
        400: "#9389ef",
        500: "#6457e8",
        600: "#5a4ed1",
        700: "#4b41ae",
        800: "#3c348b",
        900: "#312b72",
      },
    },
    extend: {},
  },
  plugins: [],
};