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
        background: '#FFFFFF',
        foreground: '#333333',
        primary: '#2196F3',
        secondary: '#00C853',
        destructive: '#FF5722',
        muted: '#B0BEC5',
        accent: '#FFC107',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
