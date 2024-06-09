<template>
  <div class="second-page">
    <h1 class="message-container">
      <span v-for="(char, index) in message" :key="index" :style="{ animationDelay: `${index * 0.05}s` }" class="message-char">{{ char }}</span>
    </h1>
    <button class="modern-button" @click="startFadeIn">Show Doggies!</button>
    <div class="images-container">
      <img v-for="(dog, index) in dogs" :key="index" :src="dog" alt="Dog Image" :class="['image', { 'fade-in': imagesVisible[index] }]" :style="{ animationDelay: `${index * 1}s` }">
    </div>
    <p class="message-container-1" v-if="imagesVisible.every(visible => visible)">I love you Tiffany</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import dog1 from '../assets/dog1.png';
import dog2 from '../assets/dog2.png';
import dog3 from '../assets/dog3.png';
import dog4 from '../assets/dog4.png';
import dog5 from '../assets/dog5.png';

export default defineComponent({
  name: 'SecondPage',
  setup() {
    const state = reactive({
      message: "I know things have been tough, so I just wanted to let you know you mean the world to me",
      dogs: [dog1, dog2, dog3, dog4, dog5],
      imagesVisible: [false, false, false, false, false],
      messageVisible: false
    });

    const startFadeIn = () => {
      state.dogs.forEach((_, index) => {
        setTimeout(() => {
          state.imagesVisible[index] = true;
          if (index === state.dogs.length - 1) {
            setTimeout(() => {
              state.messageVisible = true;
            }, 1000); // Delay of 1 second after all images are visible
          }
        }, index * 1000); // Adjust delay as needed
      });
    };

    return {
      ...state,
      startFadeIn
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

html, body {
  height: 100%;
  overflow: auto; /* Ensure scrolling is enabled */
}

.second-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  min-height: 100vh; /* Ensure it takes full viewport height */
}

.message-container {
  font-family: 'Garamond', serif; /* Cursive font */
  font-size: 6vw; /* Responsive font size */
  color: #333;
  margin-bottom: 20px; /* Space between the message and the image */
  padding: 0 5vw; /* Optional: Add padding for better readability on smaller screens */
  display: inline-block;
  margin-top: 5vh; /* Raise the message higher */
  text-align: center;
}

.message-container-1 {
  font-family: 'Garamond', serif; /* Cursive font */
  font-size: 8vw; /* Responsive font size */
  color: #333;
  margin-bottom: 20px;
  padding: 0 5vw; /* Optional: Add padding for better readability on smaller screens */
  display: inline-block;
  margin-top: 5vh; /* Raise the message higher */
  text-align: center;
  opacity: 1;
  transition: opacity 1s ease;
}

.message-container-1.fade-in-message {
  opacity: 1;
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
  font-size: 4vw; /* Responsive font size */
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
  flex-wrap: wrap; /* Make images wrap on smaller screens */
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.image {
  max-width: 80vw; /* Adjust the size for responsiveness */
  height: auto;
  opacity: 0;
  transition: opacity 1s ease;
}

.image.fade-in {
  opacity: 1;
}

@media (min-width: 768px) {
  .message-container {
    font-size: 2rem;
  }
  .message-container-1 {
    font-size: 3rem;
  }
  .modern-button {
    font-size: 1rem;
  }
  .image {
    max-width: 200px;
  }
}
</style>
