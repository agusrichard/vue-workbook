const app = Vue.createApp({
  data: () => ({
    url: 'https://wwww.sekardayu.com',
    name: 'Sekardayu Hana Pradiani',
    occupation: 'Another man\'s wife',
    age: 23,
    showAge: true,
    x: 0,
    y: 0,
    friends: [
      {
        name: 'Sekardayu Hana Pradiani',
        age: 23,
        isFav: true,
      },
      {
        name: 'Saskia Nurul Azhima',
        age: 21,
        isFav: true,
      },
      {
        name: 'Arifa Rachma',
        age: 23,
        isFav: true,
      }
    ]
  }),
  methods: {
    toggleShowAge() {
      this.showAge = !this.showAge
    },
    handleEvent(event, data) {
      console.log('event', event)
      if (data) {
        console.log('data', data)
      }
    },
    handleMouseMove(event) {
      this.x = event.offsetX
      this.y = event.offsetY
    },
    toggleFav(friend) {
      friend.isFav = !friend.isFav
    }
  },
  computed: {
    filteredFriends() {
      return this.friends.filter(friend => friend.isFav)
    }
  }
})

app.mount('#app')