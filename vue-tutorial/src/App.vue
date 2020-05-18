<template>
  <div>
    <h1>{{ title }}</h1>
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
h1{
  color: purple
}
</style>
