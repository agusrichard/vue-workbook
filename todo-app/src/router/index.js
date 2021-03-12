import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Todos from '../views/Todos.vue'
import CreateTodo from '../views/CreateTodo.vue'

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
    path: '/login',
    name: 'Login',
    component: Login  
  },
  {
    path: '/register',
    name: 'Register',
    component: Register  
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
