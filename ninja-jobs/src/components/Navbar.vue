<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </div>
</template>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: black;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
}

#nav a.router-link-exact-active {
  color: white;
  background: #42b983;
}
</style>