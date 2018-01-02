<template>
  <div class="wrapper">
    <Menu id="nav" mode="horizontal" :active-name="navModule[0].path" @on-select="changeBodySection">
      <menu-item v-for="(ele, idx) in navModule" :name="ele.path" :key="idx" v-bind:to="ele.path">{{ele.title}}</menu-item>
      <menu-item v-if="needLoad" id="sign_up" name="/load/sign_up">注册</menu-item>
      <menu-item v-if="needLoad" id="sign_in" name="/load/sign_in">登录</menu-item>
    </Menu>
    <div v-if="!needLoad" class="loaded-title">欢迎你，{{userName}}</div>
  </div>
</template>

<script>
import constConfig from '@/mixins/const_define/const'
import { Menu, MenuItem } from 'iview'
export default {
  name: 'headerView',
  component: { Menu, MenuItem },
  data () {
    return {
      navModule: constConfig.navModule,
      needLoad: false,
      userName: 'hello'
    }
  },
  methods: {
    changeBodySection (name) {
      this.$router.push({
        path: name
      })
    },
    chooseLoad (name) {
      console.log(name)
    }
  },
  created () {
    console.log(constConfig)
  }
}
</script>

<style lang="less" scoped>
  .wrapper {
    position: relative;
    .loaded-title {
      position: absolute;
      right: 20px;
      font-size: 14px;
      top: 0;
      z-index: 1000;
      line-height: 60px;
    }
  }
  // .load-wrapper {
  //   position: absolute;
  //   right: 0;
  // }
  // #load-section {
  //   position: static;
  //   width: 0;
  //   height: 0;
  // }
  // #load-section:hover {
  //   color: #fff;
  //   border-bottom: none;
  // }
  #sign_up, #sign_in {
    position: absolute;
    right: 0;
  }
  #sign_up {
    right: 68px;
  }
</style>

