/** @type {import('tailwindcss').Config} */
const { tailwindTransform } = require('postcss-lit');
module.exports = {
  content: {
    files: ["./src/**/*.ts"],
    transform: {
      ts: tailwindTransform
    }
  },
  darkMode: "media",
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
