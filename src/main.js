import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from '@/router'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
