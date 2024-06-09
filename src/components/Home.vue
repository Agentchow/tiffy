<template>
  <div class="home-container">
    <h1 class="message-container">
      <span v-for="(char, index) in message" :key="index" :style="{ animationDelay: `${index * 0.1}s` }" class="message-char">{{ char }}</span>
    </h1>
    <div class="flower-animation-container">
      <FlowerAnimation />
    </div>
    <button class="modern-button" @click="goToSecondPage">Doggy!</button>
    <img :src="imagePng" alt="PNG Image" class="image">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import FlowerAnimation from './FlowerAnimation.vue';
import imagePng from '../assets/IMG_3180.png';  // Adjust the path if necessary

export default defineComponent({
  name: 'Home',
  components: {
    FlowerAnimation
  },
  setup() {
    const router = useRouter();

    const goToSecondPage = () => {
      router.push({ name: 'SecondPage' });
    };

    const message = "For Tiffany Nguyen";

    return {
      goToSecondPage,
      message,
      imagePng
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

.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffb6c1; /* Adjust background color as needed */
  padding-top: 10vh; /* Adjust this value to lower the content */
  text-align: center;
}

.message-container {
  font-family: 'Pacifico', cursive; /* Cursive font */
  font-size: 24px;
  color: #333;
  margin-bottom: 220px; /* Space between the message and the flower animation */
  padding: 0 20px; /* Optional: Add padding for better readability on smaller screens */
  display: inline-block;
}

.message-char {
  opacity: 0;
  animation: fadeIn 0.3s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.flower-animation-container {
  transform: scale(0.7); /* Scale down the FlowerAnimation component */
  margin-bottom: 20px; /* Space between the flower animation and the button */
}

.modern-button {
  padding: 10px 20px;
  margin-top: 20px; /* Adjust to create space between the button and the flower */
  background-color: #ffb6c1;
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
  background-color: #ffb6c1;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.modern-button:active {
  background-color: #ffb6c1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
}

.image {
  opacity: 0;
  width: 100px; /* Set a specific width */
  height: auto; /* Maintain aspect ratio */
  transition: opacity 0.5s ease;
  margin-top: 20px;
}

.modern-button:hover + .image {
  opacity: 1;
}
</style>
