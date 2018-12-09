import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Frontend from './views/Frontend.vue'
import Backend from './views/Backend.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/frontend',
      name: 'frontend',
      component: Frontend
    },
    {
      path: '/backend',
      name: 'backend',
      component: Backend
    }
  ]

  //mode: 'history'
})
