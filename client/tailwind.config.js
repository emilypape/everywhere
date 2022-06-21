/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      coral: '#ff385c',
      white: '#ffffff',
      gray: '#868686',
      lightgrey: '#DDDDDD',
      slate: colors.slate,
    },
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin')],
};
