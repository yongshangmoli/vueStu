const indexView = () => import('@/views/content/body.vue')
const blogListView = () => import('@/views/content/blog_list.vue')
const blogEditView = () => import('@/views/content/blog_edit.vue')
const aboutMeView = () => import('@/views/content/about.vue')
let contentRoute = [
  {
    path: '',
    redirect: 'home'
  }, {
    path: 'home',
    name: 'indexView',
    component: indexView,
    meta: {
      documentTitle: '首页'
    }
  }, {
    path: 'blog_list',
    name: 'blogListView',
    component: blogListView,
    meta: {
      documentTitle: '博客列表'
    }
  }, {
    path: 'blog_edit',
    name: 'blogEditView',
    component: blogEditView,
    meta: {
      documentTitle: '博客编辑'
    }
  }, {
    path: 'about',
    name: 'aboutMeView',
    component: aboutMeView,
    meta: {
      documentTitle: '博客编辑'
    }
  }
]

export default contentRoute
