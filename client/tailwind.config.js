/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      coral: '#ff385c',
      white: '#ffffff',
      gray: '#868686',
      lightgrey: '#DDDDDD',
      black: '#000',
      offBlack: '#222222',
      slate: colors.slate,
    },
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin')],
});
