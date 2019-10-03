import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Main from './views/Main'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          name: 'home',
          component: Main
        },
        {
          path: 'add',
          name: 'add',
          component: () => import('./views/Add.vue')
        },
        {
          path: "mine",
          name: 'mine',
          component: () => import('./views/Mine.vue')
        },
      ]
    },
    {
      path: '/detail/:id',
      name: 'detail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Detail.vue')
    },
  ]
})
