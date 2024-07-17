<template>
    <div class="about-contact">
      <AboutMe />
      <ContactInfo />
    </div>
  </template>
  
  <script setup>
  import AboutMe from '@/components/AboutMe.vue'
  import ContactInfo from '@/components/ContactInfo.vue'
  </script>
  
  <style scoped>
  .about-contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  </style>
  