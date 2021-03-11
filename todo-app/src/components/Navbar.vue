<template>
  <div class="nav">
    <div>
      <router-link :to="{ name: 'Home' }">Home</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'Login' }">Login</router-link>
      <router-link :to="{ name: 'Register' }">Register</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav {
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  background: var(--royal-purple);
  height: 75px;
  align-items: center;
}

.nav a {
  text-decoration: none;
  color: #fff;
  font-size: 22px;
  padding: 5px 10px;
  margin: 0 10px;
}

a.router-link-active.router-link-exact-active {
  background: var(--mindaro);
  color: var(--maximum-purple);
  border-radius: 10px;
}

</style>