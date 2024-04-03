import App from './App'
import ElementUI from 'element-ui';
import './assets/styles/element-variables.scss'
import MyFoot from '@assets/components/MyFoot.vue';
import 'animate.css';
import wow from 'wowjs'
import "wowjs/css/libs/animate.css"

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$wow = wow;
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