<template>
  <button class="btn">
    <span v-if="!loading">{{ title }}</span>
    <span v-else>Loading</span>
  </button>
</template>

<script>
export default {
  props: ['title', 'loading']
}
</script>

<style scoped>
button {
  border-style: none;
  border: 2px solid var(--maximum-purple);
  background: #fff;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  color: var(--rhythm);
  cursor: pointer;
  outline: none;
  transition: 0.25s;
}

button:hover {
  background: var(--mindaro);
  color: var(--maximum-purple);
}
</style>