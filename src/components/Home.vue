<template>
  <div class="home-container">
    <h1 class="message-container">
      <span v-for="(char, index) in message" :key="index" :style="{ animationDelay: `${index * 0.1}s` }" class="message-char">{{ char }}</span>
    </h1>
    <div class="flower-animation-container">
      <FlowerAnimation />
    </div>
    <button class="modern-button" @click="goToSecondPage">Go to Second Page</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import FlowerAnimation from './FlowerAnimation.vue';

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
      message
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

:root {
  --color-bg: #ffb6c1;
  --color-button-bg: #6200ea;
  --color-button-hover-bg: #3700b3;
  --color-button-text: #ffffff;
  --color-message: #333;
  --font-family: 'Pacifico', cursive; /* Cursive font */
}

.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--color-bg); /* Adjust background color as needed */
  padding-top: 10vh; /* Adjust this value to lower the content */
  text-align: center;
}

.message-container {
  font-family:  cursive;;
  font-size: 24px;
  color: var(--color-message);
  margin-bottom: 260px; /* Space between the message and the flower animation */
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
  transform: scale(0.6); /* Scale down the FlowerAnimation component */
}

.modern-button {
  padding: 10px 20px;
  margin-top: 20px; /* Adjust to create space between the button and the flower */
  background-color: var(--color-button-bg);
  color: var(--color-button-text);
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.modern-button:hover {
  background-color: var(--color-button-hover-bg);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.modern-button:active {
  background-color: var(--color-button-hover-bg);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
}
</style>
