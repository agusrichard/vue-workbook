const app = Vue.createApp({
  data: () => ({
    name: 'Sekardayu Hana Pradiani',
    occupation: 'Another man\'s wife',
    age: 23,
    showAge: true
  }),
  methods: {
    increaseAge() {
      this.age += 1
    },
    decreaseAge() {
      this.age -= 1
    },
    changeName(name) {
      this.name = name
    },
    toggleShowAge() {
      this.showAge = !this.showAge
    }
  }
})

app.mount('#app')