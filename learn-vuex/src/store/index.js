import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    setTodos: (state, todos) => state.todos = todos
  },
  actions: {
    async fetchTodos({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log('fetchTodos', response.data)

        commit('setTodos', response.data)
      } catch(error) {
        console.log(error)
        return error
      }
    }
  },
  modules: {
  }
})
