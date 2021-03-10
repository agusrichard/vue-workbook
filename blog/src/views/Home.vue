<template>
  <h1>Home</h1>
  <div>
    <label for="email">Email</label>
    <input id="email" type="text" placeholder="Your Email" v-model="email" />
  </div>
  <div>
    <label for="username">Username</label>
    <input id="username" type="text" placeholder="Your Username" v-model="username" />
  </div>
  <div>
    <p>Email: {{ email }}</p>
    <p>Username: {{ username }}</p>
    <p>Email and Username: {{ emailAndUsername }}</p>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from 'vue'

export default {
  name: 'Home',
  setup: function() {
    const email = ref('')
    const username = ref('')

    const emailAndUsername = computed(() => {
      return email.value == '' && username.value == '' ? '' : email.value + '&' + username.value
    })

    watchEffect(() => {
      console.log('my email', email.value)
    })

    return { email, username, emailAndUsername }
  }
}
</script>