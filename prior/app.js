Vue.component('greeting', {
  template: "<p>Hey there, I am {{ name }}. <button v-on:click='changeName'>Change name<button></p>",
  data: function() {
    return {
      name: 'Agus Richard'
    }
  },
  methods: {
    changeName: function() {
      this.name = 'Richard Agus'
    }
  }
})


var one = new Vue({
  el: '#vue-app-one',
  data: {
    
  },
  methods: {
    
  },
  computed: {

  }
});

var two = new Vue({
  el: '#vue-app-two',
  data: {
    
  },
  methods: {
    
  },
  computed: {
    
  }
});