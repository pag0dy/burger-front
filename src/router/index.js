import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Burgers from '../views/Burgers.vue'
import Add from '../views/Add.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hamburguesas',
    name: 'hamburguesas',
    component: Burgers
  },
  {
    path: '/add',
    name: 'add',
    component: Add
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
