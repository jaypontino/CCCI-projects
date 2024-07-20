import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/custom-antd.css',
    '@/assets/css/fonts.css'
  ],


  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
    loaders: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#A875F7', // customize primary color
          },
          javascriptEnabled: true,
        },
      },
    },
  },

  plugins: ['@/plugins/antd.js'],
  
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
  },
  compatibilityDate: '2024-07-18',
});
