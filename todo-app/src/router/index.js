import axios from 'axios'
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Todos from '../views/Todos.vue'
import CreateTodo from '../views/CreateTodo.vue'

const needAuthentication = async (to, from, next) => {
  const accessToken = localStorage.getItem('accessToken')
  try {
    const response = await axios.get(`${process.env.VUE_APP_SERVICE_URL}/accounts/profile/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    localStorage.setItem('userInfo', JSON.stringify(response.data.data))
    next()
  } catch(error) {
    next({ name: 'Login' })
  }
}

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
    component: Todos,
    beforeEnter: needAuthentication,
  },
  {
    path: '/create-todo',
    name: 'CreateTodo',
    component: CreateTodo,
    beforeEnter: needAuthentication,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
