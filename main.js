import App from './App'
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
import MyFoot from '@assets/components/MyFoot.vue';
// import baseURL from '@assets/constant/requestUrl.js'
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
// Vue.prototype.$baseURL = baseURL;
Vue.use(ElementUI);
Vue.component('MyFoot',MyFoot);

const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif