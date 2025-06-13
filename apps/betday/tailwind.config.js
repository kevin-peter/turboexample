/** @type {import('tailwindcss').Config} */

export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}',
  '../../packages/ui/**/*.{js,ts,jsx,tsx}', // ✅ your shared components
],
  safelist: [
    'bg-primary-900'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {

        primary: {
          50: 'rgb(248, 250, 252)',
          100: 'rgb(241, 245, 249)',
          200: 'rgb(226, 232, 240)',
          300: 'rgb(203, 213, 225)',
          400: 'rgb(148, 163, 184)',
          500: 'rgb(28, 37, 49)',
          600: 'rgb(27, 36, 47)',
          700: 'rgb(51, 65, 85)',
          800: 'rgb(36, 58, 72)',
          900: 'rgb(15, 23, 42)',
        },
        secondary: {
          50: 'rgb(249, 250, 251)',
          100: 'rgb(244, 244, 244)',
          200: 'rgb(228, 228, 228)',
          300: 'rgb(209, 213, 219)',
          400: 'rgb(250, 213, 120)',
          500: 'rgb(247, 193, 57)',
          600: 'rgb(255, 184, 12)',
          700: 'rgb(37, 37, 37)',
          800: 'rgb(33, 33, 33)',
          900: 'rgb(25, 25, 25)',
        },
      },
      animation: {
        blink: 'blink 1s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { backgroundColor: '#6bc0ff' },
          '50%': { backgroundColor: '#f7c139' },
        },
        fontFamily: {
          'sans': ['Roboto', 'Roboto Condensed']
        }
      },
    }
  },
  plugins: [],
}

