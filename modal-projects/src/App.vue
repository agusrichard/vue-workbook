<template>
  <h1>{{ title }}</h1>
  <teleport to=".modals" v-if="showModal">
    <Modal @close="toggleModal">
      <h1>Do you love me?</h1>
      <p>Well, I don't think you do</p>
      <template v-slot:buttons>
        <button>Login</button>
        <button>Sign Up</button>
      </template>
    </Modal>
  </teleport>
  <div>
    <button @click="toggleModal">Toggle Modal</button>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue"

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'Sekardayu Hana Pradiani',
      showModal: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
html, body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
