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
        lobster:['var(--lobster-font)', ...fontFamily.sans],
        rubik: ['var(--rubik-font)', ...fontFamily.sans],
        sora: ['var(--sora-font)', ...fontFamily.sans],
        
      },
      colors: {
        'background':'#010a27'
      }
    },
  },
  plugins: [],
}
