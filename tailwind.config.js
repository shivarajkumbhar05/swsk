/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0F3D3E',
          900: '#0B2E2F',
          800: '#0F3D3E',
          700: '#155152',
        },
        cream: '#F6F4EF',
        gold: '#D97B3F',
        wa: '#25D366',
      },
    },
  },
  plugins: [],
}
