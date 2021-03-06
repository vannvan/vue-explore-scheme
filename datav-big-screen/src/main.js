// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios';
import "babel-polyfill";
import store from '@/store/main.js';
//自定义全局mixin

//自定义全局指令
import directive from '@/common/directive'
Vue.use(directive)
//自定义组件
import WUI from '../packages/index'
Vue.use(WUI)

Vue.config.productionTip = false
Vue.prototype.$http = axios;

import dataV from '@jiaminghi/data-view'
Vue.use(dataV)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
