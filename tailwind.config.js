const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#0266FF',
        green: '#00B75B',
        gold: '#D7A13D',
      },

      fontFamily: {
        sans: ['HelveticaNeue', ...defaultTheme.fontFamily.sans],
        mono: ['NeuePixel', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
