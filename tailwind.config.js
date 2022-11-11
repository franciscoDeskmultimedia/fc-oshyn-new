const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['var(--font-rubik)', ...fontFamily.sans],
        sora: ['var(--font-sora)', ...fontFamily.sans],
      },
      colors: {
        'background':'#010a27'
      }
    },
  },
  plugins: [],
}
