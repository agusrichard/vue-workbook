<template>
  <div>
    <h3>List of Ninja:</h3>
    <ul>
      <li v-bind:key="ninja in ninjas" v-for="ninja in ninjas">{{ ninja }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Ninja',
  data: function() {
    return {
      ninjas: ['Agus', 'Richard', 'Lubis']
    }
  }

}
</script>

<style scoped>
h3 {
  color: red
}
</style>
