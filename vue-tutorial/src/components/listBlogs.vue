<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="Search Box" />
    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin'

export default {
  data: function() {
    return {
      blogs: [],
      search: ''
    }
  },
  methods: {
    
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts')
      .then(function(data) {
        console.log(data.body.slice(0, 10))
        this.blogs = data.body.slice(0, 10)
      })
  },
  filters: {
    toUppercase: function(value) {
      return value.toUpperCase()
    }
  },
  directives: {
    rainbow: function(el) {
      el.style.color = '#' + Math.random().toString().slice(2, 8)
    }
  },
  mixins: [searchMixin]
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
