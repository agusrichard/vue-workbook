<template>
  <Container title="Todos">
    <div>
      <div v-for="todo in todos" :key="todo.id">{{ todo.title }}</div>
    </div>
  </Container>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted } from '@vue/runtime-core'
import Container from '../components/Container.vue'

export default {
  components: { Container },
  setup() {
    const store = useStore()

    console.log('todos', store.state.todos)

    onMounted(() => {
      store.dispatch('fetchTodos')
    })

    return { todos: computed(() => store.state.todos) }
  }
}
</script>

<style>

</style>