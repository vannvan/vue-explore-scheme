export default {
  path:"/order/index",
  redirect:'/order/base',
  component: resolve => require(['@/pages/order/order'], resolve),
  children:[
    {
      path: '/order/base',
      name:'OrderBase',
      component: resolve => require(['@/pages/order/base'], resolve),
      meta:{
          title:'base'
      }
    },
    {
      path: '/order/details',
      name:'OrderDetails',
      component: resolve => require(['@/pages/order/details'], resolve),
      meta:{
          title:'OrderDetails'
      }
    }
  ]
}
