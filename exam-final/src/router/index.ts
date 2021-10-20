import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import TeamList from '@/views/TeamList.vue'
import TeamDetails from '@/views/TeamDetails.vue'
import TeamCreate from '@/views/TeamCreate.vue'
import Australia from '@/views/Australia.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/teams/:slug',
    name: 'TeamDetails',
    component: TeamDetails
  },
  {
    path: '/teams',
    name: 'TeamList',
    component: TeamList
  },
  {
    path: '/teamsById:',
    name: 'TeamCreate',
    component: TeamCreate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
