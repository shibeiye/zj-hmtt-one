// 进行路由初始化和配置
import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    }
  ]
})
export default router
