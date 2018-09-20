import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Goods from '../components/goods/goods'
import Ratings from '../components/ratings/ratings'
import Sellers from '../components/sellers/sellers'

// 注册路由
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: '商品',
    redirect: 'goods'
  },
  {
    path: '/goods',
    name: '商品',
    component: Goods
  },
  {
    path: '/sellers',
    name: '商户',
    component: Sellers
  },
  {
    path: '/ratings',
    name: '评论',
    component: Ratings
  }
]
// 创建路由实例，导入配置的路由地址
let router = new Router({
  routes,
  linkActiveClass: 'active'
})
export default router
