<template>
  <div>
    <add-blog />
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'

export default {
  components: {
    'add-blog': addBlog
  },
  data: function() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Nunito Semibold';
}
</style>
