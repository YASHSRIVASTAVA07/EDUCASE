/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          100: '#F7F1FF',
          200: '#EEE4FF',
          300: '#E0D0FF',
          400: '#C4A6FF',
          500: '#A375FF',
          600: '#8046F1',
          700: '#6B2EE5',
          800: '#5618CC',
          900: '#4A0FB3'
        },
      },
      fontSize: {
        '28': '28px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};