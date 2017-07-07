import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import router from './router'

// 引入axios的配置
import $http from './config/axios.js'

// 在vue的原型上挂载$http
Vue.prototype.$http = $http

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
