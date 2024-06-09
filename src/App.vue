<!-- src/App.vue -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
/* Add any global styles here */
body {
  background-image: linear-gradient(to top, #ffb6c1 , #ffb6c1 );
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
}
</style>