new Vue({
  el: '#vue-app',
  data: {
    name: 'Agus Richard Lubis',
    website: 'http://alphamartian.wordpress.com',
    websiteTag: '<a href="http://alphamartian.wordpress.com">My Website</a>'
  },
  methods: {
    greet: function(time) {
      return `Good ${time}! ${this.name}`
    }
  }
});