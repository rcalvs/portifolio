// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class' or 'false'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'route': "url('./images/route.png')",
      })
    },
    fontFamily: {
      'mono': ['Comfortaa']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
