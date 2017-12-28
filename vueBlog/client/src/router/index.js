import Vue from 'vue'
import Router from 'vue-router'
import indexView from '@/views/home_view'
import loadRoute from './user_load'
import bodyRoute from './content_body'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeView',
      component: indexView,
      children: bodyRoute,
      meta: {
        documentTitle: '首页'
      }
    }, {
      path: '/load',
      name: 'loadView',
      component: indexView,
      children: loadRoute,
      meta: {
        documentTitle: '登录'
      }
    }
  ]
})
