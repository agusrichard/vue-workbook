<template>
  <Container title="Todo List">
    <div v-if="!loading" class="todos-container">
      <div class="todo-item" v-for="todo in todos" :key="todo.id">
        <h3>{{ todo.title }}</h3>
        <p>{{ todo.description }}</p>
      </div>
    </div>
    <div class="loading" v-else>Loading</div>
  </Container>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'

import config from '../config/config'

import Container from '../components/Container.vue'

export default {
  components: { Container },
  setup: function() {
    const loading = ref(false)
    const todos = ref([])

    onMounted(async () => {
      loading.value = true
      try {
        const response = await axios.get(`${process.env.VUE_APP_SERVICE_URL}/todos/`, config())
        todos.value = response.data.data
        loading.value = false
      } catch(error) {
        console.log('error')
        loading.value = false
        return error
      }
    })

    return { loading, todos }
  }
}
</script>

<style scoped>
.todos-container {
  display: flex;
  align-items: center;
  margin-top: 50px;
  overflow-x: auto;
  flex-direction: column;
}

.todo-item {
  background: var(--royal-purple);
  width: 75%;
  color: white;
  border-radius: 10px;
  margin: 10px 0;
}

.loading {
  margin-top: 25px;
}
</style>