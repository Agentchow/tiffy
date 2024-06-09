<!-- src/components/Home.vue -->
<template>
    <div>
      <FlowerAnimation />
      <button @click="goToSecondPage">Go to Second Page</button>
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
  /* Add styles here */
  </style>
  