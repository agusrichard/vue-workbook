<template>
  <div>
    <label :for="id" class="label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  props: ['label', 'id', 'type', 'placeholder', 'modelValue'],
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