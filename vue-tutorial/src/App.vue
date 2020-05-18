<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
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
