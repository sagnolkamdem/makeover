/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ECFFEC',
          100: '#E3FFE3',
          200: '#CEEACD',
          300: '#b0ddae',
          400: '#74c372',
          500: '#39a935',
          600: '#339830',
          700: '#2b7f28',
          800: '#226520',
          900: '#1c531a',
        },
        secondary: {
          lighter: '#F29121',
          light: '#F8B133',
          50: '#FEF9F3',
          100: '#FDF4E7',
          200: '#FAE2C4',
          300: '#F7D1A1',
          400: '#F2AF5A',
          500: '#EC8C13',
          600: '#D47E11',
          700: '#B1690E',
          800: '#8E540B',
          900: '#744509',
        }
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '7': 'repeat(7, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
      },
      // fontFamily: {
      //   sans: ['Inter var', ...fontFamily.sans],
      //   mono: ['Roboto Mono', ...fontFamily.mono],
      // },
      maxWidth: {
        '8xl': '90rem',
      },
      screens: {
        '2xl': '1536px',
      },
      fontSize: {
        xxs: '0.75rem'
      }
    },
  },
  plugins: [],
}
