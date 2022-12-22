/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#F86338'
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('../src/assets/hero.png')",
       })
    },
  },
  plugins: [],
}
