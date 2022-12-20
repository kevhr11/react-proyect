const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
  },
}
