<template>
  <div class="nav">
    <div>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
    <div v-if="!isLoggedIn">
      <router-link :to="{ name: 'Login' }">Login</router-link>
      <router-link :to="{ name: 'Register' }">Register</router-link>
    </div>
    <div v-else>
      <router-link :to="{ name: 'Todos' }">Todos</router-link>
      <router-link :to="{ name: 'CreateTodo' }">Create Todo</router-link>
      <button>Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isLoggedIn']
}
</script>

<style scoped>
.nav {
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  background: var(--royal-purple);
  height: var(--navbar-height);
  align-items: center;
}

.nav a {
  text-decoration: none;
  color: #fff;
  font-size: 22px;
  padding: 10px 10px;
  margin: 0 10px;
}

a.router-link-active.router-link-exact-active {
  background: var(--mindaro);
  color: var(--maximum-purple);
  border-radius: 10px;
}

</style>