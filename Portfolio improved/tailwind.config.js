// tailwind.config.js
module.exports = {
  contents: [
    './components/**/*.{vue,js}', 
    './layouts/**/*.vue', 
    './pages/**/*.vue', 
    './plugins/**/*.{js,ts}', 
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        purpleTheme: '#4a148c',
        primary: '#9c27b0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
