const signInView = () => import('@/views/load/sign_in.vue')
const signUpView = () => import('@/views/load/sign_up.vue')

let loadRouter = [
  {
    path: '',
    redirect: 'sign_in'
  }, {
    path: 'sign_in',
    name: 'signInView',
    component: signInView,
    meta: {
      documentTitle: '登录'
    }
  }, {
    path: 'sign_up',
    name: 'signUpView',
    component: signUpView,
    meta: {
      documentTitle: '注册'
    }
  }
]

export default loadRouter
