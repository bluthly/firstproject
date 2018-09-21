<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<span>testt</span>-->
    <!--<router-view/>-->
    <!--<first/>-->

    <v-header :seller="seller" ></v-header>
    <!--中间内容块-->
    <div class="tab">
      <div class="tab-item">
        <!--<a v-link="/goods"></a>-->
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sellers">商户</router-link>
      </div>
    </div>
    <!--显示导航路由内容-->
    <router-view></router-view>

  </div>
</template>

<script>
  // import first from './components/First'
  import header from './components/Header'
  let appData = require('../data.json')
  let seller = appData.seller
  let goods = appData.goods
  let ratings = appData.ratings
  // const ERR_OK = 0
  export default {
    name: 'App',
    components: {
      // first,
      'v-header': header
    },
    data () {
      return {
        'seller': {},
        'goods': {},
        'ratings': {}
      }
    },
    created: function () {
      console.log(seller)
      this.seller = seller
      this.goods = goods
      this.ratings = ratings
      // this.$http.get('http://www.baidu.com').then((response) => {
      //   console.log(response)
      // })
      // this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
      //   console.log(response)
      //   response = response.body
      //   if (response.errno === ERR_OK) {
      //     this.seller = Object.assign({}, this.seller, response.data)
      //   }
      // })
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    .tab
      display: flex
      height: 40px
      width: 100%
      line-height: 40px
      //<!--border-1px(rgba(7,17,27,0.1))-->
      .tab-item
        flex: 1
        text-align: center
        &> a
          display:block
          color: #4d555d
        &> .active
          color:red

</style>
