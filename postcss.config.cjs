/**module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // add this line
    autoprefixer: {},
  },
};**/

module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};