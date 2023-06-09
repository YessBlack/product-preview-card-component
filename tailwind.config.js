/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    backgroundImage: {
      mobile: "url('src/assets/image-product-mobile.jpg')",
      desktop: "url('src/assets/image-product-desktop.jpg')"
    },
    colors: {
      darkCyan: 'hsl(158, 36%, 37%)',
      cream: 'hsl(30, 38%, 92%)',
      veryDarkBlue: 'hsl(212, 21%, 14%)',
      darkGrayishBlue: 'hsl(228, 12%, 48%)',
      white: 'hsl(0, 0%, 100%)'
    },
    fontFamily: {
      fontFamily1: 'Fraunces, serif',
      fontFamily2: 'Montserrat, sans-serif'
    }
  },
  plugins: []
}
