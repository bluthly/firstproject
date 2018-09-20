<template>
  <div>
    <h1>My First Page</h1>
    <p>输出的数据：<span class="dataStyle">{{dataMsg}}</span></p>
    <parent />
  </div>
</template>

<script>
// 创建 孙子 模板
let grendson = {
  template: '<div>孙子</div>'
}

// 创建 儿子 模板
let son = {
  template: '<div>儿子<grendson >孙子</grendson ></div>',
  components: {
    grendson
  }
}

// 创建 父亲 模板
let parent = {
  template: '<div>父亲<son></son></div>',
  components: {
    son
  }
}

export default {
  name: 'First',
  components: {parent},
  template: '<parent />',
  data () {
    return {dataMsg: 'test'}
  }
}
</script>

<style scoped>
  .dataStyle{
    color:red;
  }
</style>
