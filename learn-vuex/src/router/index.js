import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Todos from '../views/Todos.vue'
import CreateTodo from '../views/CreateTodo.vue'

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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
