/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': "1536px"
    },
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif']
      },
      colors: {
        // Primary colors
        Tomato: 'hsl(4, 100%, 67%)',

        // Neutral colors
        darkSlateGrey: 'hsl(234, 29%, 20%)',
        charcoalGrey: 'hsl(235, 18%, 26%)',
        Grey: 'hsl(231, 7%, 60%)',
        White: 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}