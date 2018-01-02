<template>
  <div id="app">
    <transition name="fade" mode="out-in" :duration="100">
      <router-view class="page"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    let globalLoading = document.getElementById('globalLoading')
    let app = document.getElementById('app')
    globalLoading.style.display = 'none'
    app.style.display = 'block'
  }
}
</script>

<style>
  #app {
    height: 100%;
    background: #495060;
  }

  .page {
    height: 100%;
    min-height: 100%;
  }

  .page {
    margin: 0 auto;
    max-width: 980px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s ease;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
