
import { defineNuxtPlugin } from '#app'
import Antd from 'ant-design-vue'
import 'assets/css/custom-antd.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Antd)
})
