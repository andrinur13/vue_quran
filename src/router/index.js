import Vue from 'vue'
import VueRouter from 'vue-router'
import QuranSurah from '../views/QuranSurah.vue'
import QuranHome from '../views/QuranHome.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Quran Home',
    component: QuranHome
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/surah/:id',
    name: 'Surah',
    component: QuranSurah
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
