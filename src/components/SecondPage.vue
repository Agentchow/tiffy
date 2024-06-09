<template>
  <div class="second-page">
    <h1>I know things have been tough, so I just wanted to let you know I'll always care for you</h1>
    <div class="images-container">
      <img :src="imagePng" alt="PNG Image" class="image">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import imagePng from '../assets/IMG_6716.png';  // Adjust the path if necessary

export default defineComponent({
  name: 'SecondPage',
  data() {
    return {
      imagePng
    };
  }
});
</script>

<style scoped>
.second-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.images-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.image {
  max-width: 100%;
  height: auto;
}
</style>
