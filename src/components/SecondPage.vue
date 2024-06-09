<template>
  <div class="second-page">
    <h1 class="message-container">
      <span v-for="(char, index) in message" :key="index" :style="{ animationDelay: `${index * 0.05}s` }" class="message-char">{{ char }}</span>
    </h1>
    <button class="modern-button" @click="startFadeIn">Show Doggies</button>
    <div class="images-container">
      <img v-for="(dog, index) in dogs" :key="index" :src="dog" alt="Dog Image" :class="['image', { 'fade-in': imagesVisible[index] }]" :style="{ animationDelay: `${index * 1}s` }">
    </div>
    <!-- <button class="modern-button" @click="showVideo" v-if="imagesVisible.every(visible => visible)">Show Video</button>
    <video controls class="video" v-if="videoVisible">
      <source :src="video" type="video/quicktime">
      Your browser does not support the video tag.
    </video> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import dog1 from '../assets/dog1.png';
import dog2 from '../assets/dog2.png';
import dog3 from '../assets/dog3.png';
import dog4 from '../assets/dog4.png';
import dog5 from '../assets/dog5.png';
import beanMov from '../assets/bean.mov'; // Ensure this path is correct

export default defineComponent({
  name: 'SecondPage',
  setup() {
    const state = reactive({
      message: "I know things have been tough, so I just wanted to let you know I'll always care for you",
      dogs: [dog1, dog2, dog3, dog4, dog5],
      imagesVisible: [false, false, false, false, false],
      video: beanMov,
      videoVisible: true
    });

    const startFadeIn = () => {
      state.dogs.forEach((_, index) => {
        setTimeout(() => {
          state.imagesVisible[index] = true;
        }, index * 1000); // Adjust delay as needed
      });
    };

    const showVideo = () => {
      state.videoVisible = true;
    };

    return {
      ...state,
      startFadeIn,
      showVideo
    };
  }
});
</script>

<style scoped>
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.second-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Align items to the top */
  padding: 20px;
  min-height: 100vh; /* Ensure it takes full viewport height */
}

.message-container {
  font-family: 'Garamond', serif; /* Cursive font */
  font-size: 24px;
  color: #333;
  margin-bottom: 20px; /* Space between the message and the image */
  padding: 0 20px; /* Optional: Add padding for better readability on smaller screens */
  display: inline-block;
  margin-top: 40px; /* Raise the message higher */
}

.message-char {
  opacity: 0;
  animation: fadeIn 0.3s forwards; /* Speed up the animation duration */
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.modern-button {
  padding: 10px 20px;
  margin-top: 20px; /* Adjust to create space between the button and the images */
  background-color: #ff99cc; /* Light pink color */
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
}

.modern-button:hover {
  background-color: #ff6699; /* Darker pink for hover */
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.modern-button:active {
  background-color: #ff6699; /* Darker pink for active state */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
}

.images-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px; /* Raise the images higher */
}

.image {
  max-width: 200px; /* Adjust the size as needed */
  height: auto;
  opacity: 0;
  transition: opacity 1s ease;
}

.image.fade-in {
  opacity: 1;
}

.video {
  margin-top: 20px;
  max-width: 100%;
}

@keyframes fadeInImage {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

