<template>
  <div id="search-form">
    <label>Search Images</label>
    <form>
      <input v-model="query" type="text" />
      <button @click="handleSubmit()" type="button">+</button>
    </form>
    <div id="image-container">
      <article v-for="image in images" :key="image.id">
        <img v-bind:src="image.urls.small" />
      </article>
    </div>
  </div>
</template>

<script>
import apiKeys from '../../apiKeys.js'

export default {
  name: 'SearchForm',
  data() {
    return {
      query: '',
      images: [],
      imageCards: []
    }
  },
  methods: {
    async handleSubmit() {   
      const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${this.query}&client_id=${apiKeys.apiKey}`)

      if (!response.ok) {
        throw Error(`Failed to fetch images`)
      }
      const filteredImages = await response.json()
      this.images = filteredImages.results
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
article {
  display: flex
}
label {
  display: flex;
  justify-content: center;
  font-size: 40px;
  grid-area: header;
}
#image-container {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: scroll;
  grid-area: imageContainer;
  flex-wrap: wrap;
  flex-direction: row;
}
img {
  margin: 2vh;
  width: 95%;
}
input {
  width: 25vh;
  height: 5vh;
  font-size: 3vh;
}
button {
  width: 5vh;
  height: 5vh;
  font-size: 30px;
  border-radius: 22px;
}
form {
  margin-bottom: 4vh;
  grid-area: searchBar;
}
#search-form {
  display: grid;
  grid-template-areas:
    "header searchBar searchBar"
    "header imageContainer imageContainer"
    "header imageContainer imageContainer";
  grid-template-columns: 25% auto;
  grid-template-rows: 10% auto;
  height: 100vh;
}
</style>

