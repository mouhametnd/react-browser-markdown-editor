const autoprefixer = require('autoprefixer');
const { default: postcss } = require('postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
      fontFamily: {
        Pri: ['Roboto', 'sans-serif'],
        Sec: ['Roboto Slab', 'monospace'],
        code: ['Fira Code', 'monospace'],
      },
      colors: {
        orange: '#E46643',
        white: {
          100: '#fff',
          200: '#f5f5f5',
        },
        black: {
          000: '#000',
          200: '#1D1F22',
          300: '#212529',
          400: '#151619',
          500: '#1516197f',
        },
        gray: {
          100: '#ced4da',
          200: '#c1c4cb',
          300: '#7c8187',
          400: '#35393f',
          500: '#2B2D31',
          600: '#2f3133',
          700: '#5a6069',
        },
      },
    },
  },
  plugins: [autoprefixer, postcss],
};
