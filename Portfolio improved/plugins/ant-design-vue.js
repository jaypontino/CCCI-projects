import { defineNuxtPlugin } from '#app'
import Antd from 'ant-design-vue'
import 'assets/css/custom-antd.css'
import * as Icons from '@ant-design/icons-vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Antd)
  Object.keys(Icons).forEach(key => {
    nuxtApp.vueApp.component(key, Icons[key])
  })
})
