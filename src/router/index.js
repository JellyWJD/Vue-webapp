import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import index from '@/components/index/index'
import category from '@/components/category/category'
import eat from '@/components/eat/eat'
import shopcart from '@/components/shopcart/shopcart'
import user from '@/components/user/user'
import login from '@/components/login/login'
Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/category',
      component: category
    },
    {
      path: '/eat',
      component: eat
    },
    {
      path: '/shopcart',
      component: shopcart
    },
    {
      path: '/user',
      component: user
    },
    {
      path: '/login',
      component: login
    }
  ]
})
