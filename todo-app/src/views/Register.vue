<template>
  <Container title="Register Form">
    <form class="register-form" @submit.prevent="handleSubmit">
      <TextField id="first-name" label="First Name:" placeholder="Your First Name" type="text" v-model="firstname" />
      <TextField id="last-name" label="Last Name:" placeholder="Your Last Name" type="text" v-model="lastname" />
      <TextField id="email" label="Email:" placeholder="Your Email" type="email" v-model="email" />
      <TextField id="username" label="Username:" placeholder="Your Username" type="text" v-model="username" />
      <TextField id="password" label="Password:" placeholder="Your Password" type="password" v-model="password" />
      <Button title="Register" class="btn-register" :loading="loading" />
    </form>
  </Container>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

import Button from '../components/Button.vue'
import Container from '../components/Container.vue'
import TextField from '../components/TextField.vue'

export default {
  components: { Container, TextField, Button },
  setup: function() {
    const router = useRouter()

    const firstname = ref('')
    const lastname = ref('')
    const email = ref('')
    const username = ref('')
    const password = ref('')
    const loading = ref(false)

    const handleSubmit = async () => {
      loading.value = true
      try {
        await axios.post(`${process.env.VUE_APP_SERVICE_URL}/accounts/register/`, {
          email: email.value,
          username: username.value,
          password: password.value,
          first_name: firstname.value,
          last_name: lastname.value
        })

        loading.value = false
        router.push({ name: 'Login' })
      } catch(error) {
        loading.value = false
        console.log(error.message)
        return error
      }
    }

    return { firstname, lastname, email, username, password, handleSubmit }
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
  max-width: 250px;
  border-bottom: 2px solid var(--royal-purple);
}

.register-form {
  padding: 35px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-register {
  margin-top: 65px;
}
</style>