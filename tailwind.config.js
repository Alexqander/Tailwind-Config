/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/html/index.html"],
  theme: {
    colors: {
      primary: "#FF8906",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
