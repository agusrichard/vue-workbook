<template>
  <Container title="Create Todo">
    <form class="create-todo-form" @submit.prevent="handleSubmit">
      <TextField label="Title" placeholder="What's you gonna do today?" id="todo-title" type="text" v-model="title" />
      <TextArea label="Description" placeholder="Explain it in detail so you'll know exactly what to do!" id="todo-description" v-model="description" />
      <Button title="Submit" class="create-todo-btn" />
    </form>
  </Container>
</template>

<script>
import axios from 'axios'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

import config from '../config/config'

import Button from '../components/Button.vue'
import TextArea from '../components/TextArea.vue'
import TextField from '../components/TextField.vue'
import Container from '../components/Container.vue'

export default {
  components: { Container, TextField, TextArea, Button },
  setup: function() {
    const title = ref('')
    const description = ref('')
    const router = useRouter()

    const handleSubmit = async () => {
      try {
        const data = {
          title: title.value,
          description: description.value
        }
        await axios.post(`${process.env.VUE_APP_SERVICE_URL}/todos/`, data, config())
        router.push({ name: 'Todos' })
      } catch(error) {
        console.log(error)
        return error
      }
    }

    return { title, description, handleSubmit }
  }
}
</script>

<style scoped>
.create-todo-form {
  padding-top: 50px;
}

.create-todo-btn {
  margin-top: 25px;
}
</style>