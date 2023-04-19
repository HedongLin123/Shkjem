import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let kejianrouter = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('./views/Blog.vue'),
    },
    {
      path: '/blogDetails/:id',
      name: 'blogDetails',
      component: () => import('./views/NewsDetails.vue'),
    },
    {
      path: '/itToolDetails/:id',
      name: 'itToolDetails',
      component: () => import('./views/NewsDetails.vue'),
    },
    {
      path: '/itTools',
      name: 'itTools',
      component: () => import('./views/News.vue')
    },
    {
      path: '/abouts',
      name: 'abouts',
      component: () => import('./views/About.vue')
    }
  ]
})

// 判断是否需要登录权限 以及是否登录
kejianrouter.beforeEach((to, from, next) => {
  // 判断是否需要登录权限
  if (to.matched.some(res => res.meta.requireAuth)) {
    // 判断是否登录
    if (sessionStorage.getItem('token')) {
      next()
    } else {
      // 没登录则跳转到登录界面
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default kejianrouter