<!-- src/components/Home.vue -->
<template>
  <div class="home-container">
    <FlowerAnimation />
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

    return {
      goToSecondPage
    };
  }
});
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120vh;
  position: relative;
  background-color: #ffb6c1; /* Adjust background color as needed */
  margin-top: 50px; /* Adjust this value to lower the content */
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
}

.modern-button:hover {
  background-color: #3700b3;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.modern-button:active {
  background-color: #3700b3;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
}
</style>
