<template>
  <div class="main-body">
    <my-header></my-header>
    <router-view class="blog-content"></router-view>
    <my-footer></my-footer>
  </div>
</template>
<script>
import myHeader from '@/views/component/header'
import myFooter from '@/views/component/footer'
export default {
  name: 'homeView',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    myHeader,
    myFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .main-body {
    height: 100%;
    min-height: 100%;
    .blog-content {
      min-height: 100%;
      margin-top: -138px;
      padding: 158px 20px 20px;
      background: #f5f7f9;
    }
  }
</style>
