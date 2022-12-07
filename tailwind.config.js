/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "blob-border-radius": "41% 59% 65% 35% / 48% 38% 62% 52%",
      },
      screens: {
        xs: "425px",
      },
    },
  },
  plugins: [],
};
