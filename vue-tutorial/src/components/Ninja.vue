<template>
  <ul>
    <li v-bind:key="ninja in ninjas" v-for="ninja in ninjas">{{ ninja }}</li>
  </ul>
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

<style>

</style>
