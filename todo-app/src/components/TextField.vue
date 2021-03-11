<template>
  <div>
    <label :for="id" class="label">{{ label }}</label>
    <input :type="type" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  props: ['label', 'id', 'type', 'placeholder']
}
</script>

<style scoped>
div {
  width: 50%;
  margin: 15px auto;
}

label {
  display: block;
  text-align: left;
  padding: 0 0 10px 0;
  width: 100%;
  font-size: 22px;
  color: var(--rhythm);
}

input {
  display: block;
  width: 100%;
  font-size: 22px;
  padding: 10px 20px;
  border: 2px solid var(--maximum-purple);
  border-radius: 5px;
  transition: 0.25s;
}

input:focus {
  background: var(--mindaro);
}

input:hover {
  border: 2px solid var(--granny-smith-apple);
}
</style>