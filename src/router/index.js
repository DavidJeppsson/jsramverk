import Vue from 'vue'
import VueRouter from 'vue-router'

import VueSimpleMarkdown from 'vue-simple-markdown';
Vue.use(VueSimpleMarkdown)

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Reports from '../views/Reports.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path: '/about',
      name: 'About',
      component: About
  },
  {
      path: '/reports/week/1',
      name: 'Kmom01',
      component: Reports
  },
  {
      path: '/register',
      name: 'Register',
      component: Register
  },
  {
      path: '/login',
      name: 'Login',
      component: Login
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
