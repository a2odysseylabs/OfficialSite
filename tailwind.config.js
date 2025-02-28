/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'xs': ['.625rem', '1.25rem'],
      'sm': ['.75rem', '1.25rem'],
      'base': ['1rem', '1.25rem'],
      'lg': ['1.25rem', '1.5rem'],
      'xl': ['1.5rem', '1.75rem'],
      '2xl': ['2rem', '2.25rem'],
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font
      },
      boxShadow: {
        '3xl': '0 8px 12px 0 rgba(0, 0, 0, 0.75)',
      },
      colors: {
        'purple': {
          100: '#e1c8f9',
          200: '#cda4f5',
          300: '#b980f0',
          400: '#af6dee',
          500: '#9b49ea',
          600: '#7c3abb',
          700: '#5d2c8c',
          800: '#3e1d5e',
          850: '#2e1646',
          900: '#1f0f2f',
          950: '#0f0717',
        },
      },
    },
  },
  plugins: [],
}

