<template>
  <div>
    <h2>{{ title }}</h2>
    <Ninja />
  </div>
</template>

<script>
import Ninja from './components/Ninja'

export default {
  name: 'App',
  components: {
    'Ninja': Ninja
  },
  data: function() {
    return {
      title: 'Welcome!!'
    }
  },
  methods: {
    greeting: function() {
      return 'Heyy.... Yo!'
    }
  }
}
</script>

<style>

</style>
