<template>
  <div class="navbar">
    <router-link :to="{ name: 'Home' }" class="link">Home</router-link>
    <router-link :to="{ name: 'Todos' }" class="link">Todos</router-link>
    <router-link :to="{ name: 'CreateTodo' }" class="link">Create</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  background: var(--ebony);
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.link {
  margin: 10px 20px;
  padding: 5px 10px;
  text-decoration: none;
  color: white;
  font-size: 1.3rem;
  border-radius: 10px;
  transition: 0.2s;
}

.link.router-link-active.router-link-exact-active {
  background: var(--light-blue);
}
</style>