<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['title'],
}
</script>

<style scoped>
.container {
  background: #fff;
  width: 50vw;
  margin: 30px auto;
  height: calc(100vh - 2 * var(--navbar-height));
  border-radius: 20px;
  text-align: center;
}

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
</style>