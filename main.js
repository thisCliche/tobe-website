import App from './App'
import ElementUI from 'element-ui';
import './assets/styles/element-variables.scss'
import MyFoot from '@assets/components/MyFoot.vue';
import 'animate.css';
import wow from 'wowjs'
import "wowjs/css/libs/animate.css"
import Waves from 'vue-waves-effect';
import 'vue-waves-effect/dist/vueWavesEffect.css';
import VueTypedJs from 'vue-typed-js';
import initApp from "@assets/router/routerDefend.js"

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$wow = wow;
Vue.use(ElementUI).use(Waves).use(VueTypedJs);
Vue.component('MyFoot',MyFoot);
console.log(initApp)
initApp()  // 路由拦截

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