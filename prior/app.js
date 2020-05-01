new Vue({
  el: '#vue-app',
  data: {
    name: 'Agus Richard Lubis',
    job: 'Ninja'
  },
  methods: {
    greet: function(time) {
      return `Good ${time}! ${this.name}`
    }
  }
});