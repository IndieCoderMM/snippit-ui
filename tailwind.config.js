/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary-color': '#d42b63',
        'secondary-color': '#f2c0d0',
        'accent-color': '#be275a',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
