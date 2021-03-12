<template>
  <Container>
    <h1 class="title">Login Form</h1>
    <form class="login-form" @submit.prevent="handleSubmit">
      <TextField id="username" label="Username:" placeholder="Your Username" type="text" v-model="username" />
      <TextField id="password" label="Password:" placeholder="Your Password" type="password" v-model="password" />
      <Button title="Login" class="btn-login" />
    </form>
  </Container>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import Button from '../components/Button.vue'
import Container from '../components/Container.vue'
import TextField from '../components/TextField.vue'

export default {
  components: { Container, TextField, Button },
  setup: function() {
    const router = useRouter()

    const username = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      try {
        const response = await axios.post(`${process.env.VUE_APP_SERVICE_URL}/accounts/login/`, {
          username: username.value,
          password: password.value
        })


        localStorage.setItem('accessToken', response.data.access)
        localStorage.setItem('refreshToken', response.data.refresh)
        console.log('response.data', response.data)
        router.push({ name: 'Todos' })
      } catch(error) {
        console.log(error.message)
        return error
      }
    }

    return { username, password, handleSubmit }
  }
}
</script>

<style scoped>
h1.title {
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0 auto;
  padding-top: 25px;
  padding-bottom: 10px;
  color: var(--rhythm);
  max-width: 200px;
  border-bottom: 2px solid var(--royal-purple);
}

.login-form {
  padding: 35px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-login {
  margin-top: 65px;
}
</style>