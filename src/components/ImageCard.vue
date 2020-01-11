<template>
  <div id="image-card">
    <img v-bind:src="url" /> 
  </div>
</template>

<script>

export default {
  name: 'ImageCard',
  props: {
    url: String
  }
}
</script>