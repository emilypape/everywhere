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
      darkGrey: '#353535',
      lightCoral: '#FFD7DF',
      slate: colors.slate,
    },
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin')],
});
