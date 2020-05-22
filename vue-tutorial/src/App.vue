<template>
  <div>
    <show-blogs />
    <list-blogs />
  </div>
</template>

<script>
// import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
import listBlogs from './components/listBlogs.vue'

export default {
  components: {
    // 'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs
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
