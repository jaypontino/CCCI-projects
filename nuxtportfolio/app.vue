<template>
  <div id="app">
    <NavBar />
    <NuxtPage />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<style>
@import '@/assets/css/portfolio.css';

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
</style>
