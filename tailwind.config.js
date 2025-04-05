/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        darker: '#0a0a0a',
        gold: {
          light: '#FFD700',
          DEFAULT: '#D4AF37',
          dark: '#B8860B',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}