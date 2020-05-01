new Vue({
  el: '#vue-app',
  data: {
    age: 22,
    a: 0,
    b: 0
  },
  methods: {
    // addToA: function() {
    //   console.log('addToA')
    //   return this.age + this.a
    // },
    // addToB: function() {
    //   console.log('addToB')
    //   return this.age + this.b
    // }
  },
  computed: {
    addToA: function() {
      console.log('addToA')
      return this.age + this.a
    },
    addToB: function() {
      console.log('addToB')
      return this.age + this.b
    }
  }
});