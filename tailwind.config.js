/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'rd': '#3F3D56'
      },
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
      },
      gridTemplateColumns: {
        'col-divide': '2.5fr 1fr',
      },
      colors: {
        customDark: 'hsl(225, 6%, 13%)', // Add your custom color here
      },
    },
    screens: {
      '2xl': { 'max': '1536px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '640px' },
    },
  },
  plugins: [],
})


