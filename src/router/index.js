import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../components/MainPage'
import For from '../components/For'
import AboutProject from '../components/AboutProject'
import Buy from '../components/Buy'
import Inside from '../components/Inside'
import AboutGame from '../components/AboutGame'
import AboutUs from '../components/AboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/for',
      name: 'For',
      component: For
    },
    {
      path: '/about_project',
      name: 'AboutProject',
      component: AboutProject
    },
    {
      path: '/about_us',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/about_game',
      name: 'AboutGame',
      component: AboutGame
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy
    },
    {
      path: '/inside',
      name: 'Inside',
      component: Inside
    }
  ]
})
