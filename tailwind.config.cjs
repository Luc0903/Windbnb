/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      mulish: ['Mulish', ...defaultTheme.fontFamily.sans],
      montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        main__red: '#EB5757',
        light__gray: '#BDBDBD',
        gray__titles: '#333333',
        dark__gray: '#4F4F4F',
        veryLightGray: '#828282',
      },
      boxShadow: {
        nav__shadow: '0px 1px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
