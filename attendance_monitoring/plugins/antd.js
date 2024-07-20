import { Button, Table, Select, ConfigProvider, message } from 'ant-design-vue';
import 'assets/css/custom-antd.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Button);
  nuxtApp.vueApp.use(Table);
  nuxtApp.vueApp.use(Select);
  nuxtApp.vueApp.use(ConfigProvider);

  nuxtApp.provide('message', message);
});
