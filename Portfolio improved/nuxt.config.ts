// nuxt.config.js
export default {
  css: [
    '@/assets/css/custom-antd.css',
    '@/assets/css/global.css',
    '@/assets/css/tailwind.css', // Assuming you have a custom Tailwind setup
  ],

  plugins: [
    '@/plugins/antd',
    '@/plugins/fontawesome',
  ],

  build: {
    transpile: ['@ant-design/icons-vue'],
  },

  modules: ['@nuxtjs/tailwindcss'],

  tailwindcss: {
    cssPath: '@/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
  },

  compatibilityDate: '2024-07-21',
};