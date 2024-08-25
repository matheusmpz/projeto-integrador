/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'amifer-regular': ['Amifer-Regular', 'sans-serif'],
        'amifer-medium': ['Amifer-Medium', 'sans-serif'],
        'amifer-medium-italic': ['Amifer-Medium-Italic', 'sans-serif'],
        'amifer-italic': ['Amifer-Italic', 'sans-serif'],
        'amifer-extrabold': ['Amifer-ExtraBold', 'sans-serif'],
        'amifer-extrabold-italic': ['Amifer-ExtraBold-Italic', 'sans-serif'],
        'amifer-bold': ['Amifer-Bold', 'sans-serif'],
        'amifer-bold-italic': ['Amifer-Bold-Italic', 'sans-serif'],
        'amifer-black': ['Amifer-Black', 'sans-serif'],
        'amifer-black-italic': ['Amifer-Black-Italic', 'sans-serif'],
      },
      colors: {
        'azul': '#061F3E',
        'laranja': '#E74A40',
        'branco': '#eeeeee',
        'cinza': '#2f2f2f',
      }
    },
  },
  plugins: [],
}