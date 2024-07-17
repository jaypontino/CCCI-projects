<template>
    <div class="education-skills">
      <Education />
      <Skills />
    </div>
  </template>
  
  <script setup>
  import Education from '@/components/Education.vue'
  import Skills from '@/components/Skills.vue'
  </script>
  
  <style scoped>
  .education-skills {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  </style>
  