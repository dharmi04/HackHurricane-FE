/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#432818",
        secondary:"#bb9457",
        accent:"#603808"
      }
    },
  },
  plugins: [],
}