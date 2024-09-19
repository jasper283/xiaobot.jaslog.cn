/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: '#F7F5F3',
        primary: '#B04B43',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
