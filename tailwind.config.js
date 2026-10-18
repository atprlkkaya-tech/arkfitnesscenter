/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/**/*.{html,js,css}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brandYellow: {
          DEFAULT: '#FFD400',
          hover: '#FFE033',
          dark: '#D4AF00',
          light: '#FFF385',
        },
        brandBlack: '#0A0A0A',
        brandDark: '#121212',
        brandSurface: '#18181B',
        brandAnthracite: '#1C1C1E',
        brandBorder: 'rgba(255, 212, 0, 0.25)',
        brandFemale: '#EC4899',
        brandMale: '#3B82F6',
        brandWhatsApp: '#25D366',
      },
      fontFamily: {
        heading: ['Oswald', 'Montserrat', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 0 15px rgba(255, 212, 0, 0.25)',
        'gold-lg': '0 0 35px rgba(255, 212, 0, 0.45)',
        'card-dark': '0 12px 30px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
