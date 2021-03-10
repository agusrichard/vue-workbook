<template>
  <h1>This is a Jobs Page</h1>
  <div class="container-jobs">
    <div v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetail', params: {  id: job.id }}">
        <div class="job">{{ job.title }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          id: 1,
          title: 'Software Engineer',
        },
        {
          id: 2,
          title: 'UI/UX Designer',
        },
        {
          id: 3,
          title: 'Android Developer',
        },
        {
          id: 4,
          title: 'Quality Assurance Engineer',
        },
        {
          id: 5,
          title: 'Data Scientist',
        },
      ]
    }
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