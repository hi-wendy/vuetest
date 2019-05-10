import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import a from './views/a.vue'
import b from './views/b.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'a',
          name: 'a',
          component: a
        },
        {
          path: 'b',
          name: 'b',
          component: b,
          children: [
            {
              path: 'home',
              name: 'home1',
              component: Home
            }
          ]
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
