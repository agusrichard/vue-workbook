new Vue({
  el: '#vue-app',
  data: {
    name: '---'
  },
  methods: {
    readRefs: function() {
      console.log(this.$refs.input.value)
      this.name = this.$refs.input.value
    }
  }
})