<template>
  <Navbar :isLoggedIn="isLoggedIn" />
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar },
  setup: function() {
    const userInfo = localStorage.getItem('userInfo')

    return { isLoggedIn: userInfo ? true : false }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
