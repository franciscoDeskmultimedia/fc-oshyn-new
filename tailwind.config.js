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
      fontSize: {
        h1: "clamp(2rem, 1.6rem + 2vw, 4rem)",
        h2: "clamp(1rem, 0.5rem + 2.5vw, 3.5rem)",
        h3: "clamp(1rem, 0.87rem + 0.6499999999999999vw, 1.65rem)"
      },
      colors: {
        'background':'#010a27'
      }
    },
  },
  plugins: [],
}
