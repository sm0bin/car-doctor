/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandRed: {
          50: '#FFD4C3',
          100: '#FFC5B0',
          200: '#FFB59E',
          300: '#FFA48C',
          400: '#FF9381',
          500: '#FF3811',
          600: '#FF2E0F',
          700: '#FF260D',
          800: '#FF1E0B',
          900: '#FF0D07'
        },
      },
    }

  },
  plugins: [require("daisyui")],
}