import Vue from 'vue'
import axios from "axios";
import './plugins/components';
import App from './App.vue'

Vue.config.productionTip = false

const instanceAxios = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
});

Object.defineProperty(Vue.prototype, "$api", { get() { return instanceAxios; } });

new Vue({
  render: h => h(App),
}).$mount('#app')
