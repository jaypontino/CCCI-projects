module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#C3A9F7', // Light purple
          DEFAULT: '#A875F7', // Main purple
          dark: '#8956D8', // Dark purple
        },
        secondary: {
          light: '#F3E8FF', // Very light purple, almost white
          DEFAULT: '#E0BBFF', // Light secondary color
        },
      },
      fontFamily: {
        waltograph: ['Waltograph', 'cursive'],
      },
    },
  },
  plugins: [],
};
