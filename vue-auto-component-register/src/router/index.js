import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routers = require.context('../pages', true, /router\.js$/)

import OrderDetails from '@/pages/order/details'
const  router = [
  {
    path: '*',
    redirect: '/Index'
  },
  {
    name: 'Index',
    path: 'Index',
    redirect: {name: 'Index'},
    component: resolve => require(['@/pages/Index/Index'], resolve),
  },
  {
    name: 'menu',
    path:'menu',
    component: resolve => require(['@/components/Menu/Index'], resolve),
    children:routers.keys().map(key => {
        const it = routers(key).default
        return it
    })
  }
  ]
export default new Router({
  routes: router
})
