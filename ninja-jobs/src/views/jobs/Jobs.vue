<template>
  <h1>This is a Jobs Page</h1>
  <div class="container-jobs" v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetail', params: {  id: job.id }}">
        <div class="job">{{ job.title }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      jobs: []
    }
  },
  async mounted() {
    const response = await axios.get('http://localhost:3000/jobs')
    this.jobs = response.data
  }
}
</script>

<style scoped>
  .container-jobs {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .job {
    background: #eee;
    width: 500px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    cursor: pointer;
    transition: 0.2s;
    border-radius: 5px;
    color: black;
  }

  a {
    text-decoration: none;
  }

  .job:hover {
    background: #999;
  }
</style>