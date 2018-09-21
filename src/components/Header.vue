<template>
  <div class="header">
    <div class="content-wapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送到
        </div>
      </div>
    </div>
    <div class="bulletin-wapper"> </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      seller: {
        type: Object
      }
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  .header
    /*text-align:center;*/
</style>
