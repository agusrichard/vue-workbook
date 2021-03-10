<template>
  <SignUp />
</template>

<script>
import SignUp from './components/SignUpForm.vue'

export default {
  name: "App",
  components: { SignUp }

};
</script>

<style>
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background: #eee;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
}
</style>
