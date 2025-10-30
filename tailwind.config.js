/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#10b981',
          DEFAULT: '#059669',
          dark: '#047857',
        },
      },
    },
  },
  plugins: [],
};
