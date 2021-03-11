<template>
  <Container>
    <h1 class="title">Login Form</h1>
    <form class="login-form">
      <TextField id="username" label="Username:" placeholder="Your Username" type="text" />
      <TextField id="password" label="Password:" placeholder="Your Password" type="password" />
      <Button title="Login" class="btn-login" />
    </form>
  </Container>
</template>

<script>
import Button from '../components/Button.vue'
import Container from '../components/Container.vue'
import TextField from '../components/TextField.vue'

export default {
  components: { Container, TextField, Button }
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