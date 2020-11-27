// 进行路由初始化和配置
import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'
import auth from '@/utils/auth'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Home,
      children: [
        { path: '/', component: Welcome }
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
router.beforeEach((to, form, next) => {
  if (to.path !== '/login' && !auth.getUser().token) {
    return next('/login')
  }
  next()
})
export default router
