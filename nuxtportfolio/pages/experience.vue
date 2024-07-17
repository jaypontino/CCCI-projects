<template>
    <div class="experience-seminars">
      <Experience />
      <Seminars />
    </div>
  </template>
  
  <script setup>
  import Experience from '@/components/Experience.vue'
  import Seminars from '@/components/Seminars.vue'
  </script>
  
  <style scoped>
  .experience-seminars {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  </style>
  