// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import resource from './resource'
// import Router from 'vue-router'
// import Goods from './components/goods/goods'
// import VueRouter from 'vue-router'

import vueSource from 'vue-resource'

Vue.use(vueSource)
Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: {App},
//   template: '<App/>'
// })
// 注册路由
// Vue.use(VueRouter)
// let app = Vue.extend(App)

// let router = new VueRouter(
//   {
//     path: '/goods',
//     name: '商品',
//     component: Goods
//   }
// )
// router.go('/goods')
// router.start(app, '#app')

new Vue({
  el: '#app',
  router,
  // resource,
  components: {App},
  template: '<App/>'
})
// .$mount('#app')
// router.go('/goods')
