<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<span>testt</span>-->
    <!--<router-view/>-->
    <!--<first/>-->

    <v-header></v-header>
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

  export default {
    name: 'App',
    components: {
      // first,
      'v-header': header
    },
    data () {
      return {itemList: [ ]}
    },
    created: function () {
      this.$http.get('api/seller').then((response) => {
        console.log(response)
      })
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
