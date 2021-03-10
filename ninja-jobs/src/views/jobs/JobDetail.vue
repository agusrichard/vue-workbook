<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>{{ job.description }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id'],
  data() {
    return {
      job: null
    }
  },
  async mounted() {
    const response = await axios.get(`http://localhost:3000/jobs/${this.id}`)
    this.job = response.data
  }
}
</script>

<style>

</style>