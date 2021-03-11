<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  background: #fff;
  width: 75%;
  margin: 30px auto;
  min-height: calc(100vh - 2 * var(--navbar-height));
  border-radius: 20px;
  text-align: center;
}
</style>