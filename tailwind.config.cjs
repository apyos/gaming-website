/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      grayscale: {
        75: "75%",
      },
    },
  },
  plugins: [],
};
