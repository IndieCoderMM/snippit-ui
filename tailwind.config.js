/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: '#ECEFF1',
        input: '#E0E0E0',
        ring: '#2196F3',
        text: '#11142D',
        background: '#f4f4f4',
        foreground: '#fff',
        primary: '#475BE8',
        secondary: '#CFC8FF',
        destructive: '#FE6D8E',
        muted: '#B0BEC5',
        accent: '#2ED480',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
