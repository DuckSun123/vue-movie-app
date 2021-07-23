import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter({
  // hash
  // https://google.com/#/search
  history: createWebHashHistory(),
  scrollBehavior() {
    return {top:0}
  },
  // page
  // / -> https://google.com/ (메인페이지로 이동하겠다)
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/:pathMach(.*)',
      component: NotFound
    }
  ]
})