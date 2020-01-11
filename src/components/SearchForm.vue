<template>
  <div id="search-form">
    <form>
      <label>Search Images</label>
      <input v-model="query" type="text" />
      <button @click="handleSubmit()" type="button">Submit</button>
    </form>
  </div>
</template>

<script>
import apiCalls from '../../apiCalls.js'
import apiKeys from '../../apiKeys.js'

export default {
  name: 'SearchForm',
  props: {
    msg: String
  },
  data() {
    return {
      query: '',
      images: []
    }
  },
  methods: {
    async handleSubmit() {
      this.images = await apiCalls.getSearchImages(this.query, apiKeys.apiKey)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

