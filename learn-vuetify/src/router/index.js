import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Todos from '../views/Todos.vue'
import CreateTodo from '../views/CreateTodo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/create-todo',
    name: 'CreateTodo',
    component: CreateTodo
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
