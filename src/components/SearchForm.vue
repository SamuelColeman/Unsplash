<template>
  <div id="search-form">
    <div id="title">
      <label>Image Selector</label>
    </div>
    <form>
      <input v-model="query" type="text" />
      <button @click="handleSubmit()" type="button">Submit</button>
    </form>
    <div id="image-container">
      <article v-for="image in images" :key="image.id">
        <img @mouseover="mouseOver()" v-bind:src="image.urls.small" />
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
  display: flex;

}
label {
  font-size: 40px;
  color: #A28171;
  background: #D0CCC5;
  height: 15vh;
  margin: 2vh;
  padding: 4vh;
  border-radius: 10px;
}
#title {
  display: flex;
  justify-content: center;
  grid-area: header;
  background: #1D253B;
}
#image-container {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: scroll;
  grid-area: imageContainer;
  flex-wrap: wrap;
  flex-direction: row;
  background: #F1F1F1;
}
img {
  margin: 4vh 0 4vh 10vh;
  width: 115%;
  border-radius: 10px;
}
input {
  width: 90%;
  height: 5vh;
  font-size: 3vh;
  border-radius: 10px;
  background: #D0CCC5;
  color: #A28171;
  border: none;
  padding-left: 1vh;
}
button {
  margin-top: 2vh;
  width: 90%;
  height: 4vh;
  font-size: 20px;
  border-radius: 10px;
  background: #D0CCC5;
  color: #A28171;
}
form {
  grid-area: searchBar;
  background: #1D253B;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#search-form {
  display: grid;
  grid-template-areas:
    "header imageContainer imageContainer"
    "searchBar imageContainer imageContainer"
    "searchBar imageContainer imageContainer";
  grid-template-columns: 25% auto;
  grid-template-rows: 35% auto;
  height: 100vh;
}
</style>

