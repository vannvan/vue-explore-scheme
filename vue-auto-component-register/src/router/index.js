import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: (r => {
      var routers = r.keys().map(key => r(key).default );
      routers.push({
        path: '*',
        redirect: '/Index'
      })
      return routers;
  })(require.context('../pages/', true, /router\.js$/))
})
