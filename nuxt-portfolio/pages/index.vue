<template>
    <div class="resume-container">
      <Header />
      <ContactInfo />
      <AboutMe />
      <div class="content">
        <Education />
        <Experience />
        <Skills />
        <Seminars />
      </div>
    </div>
  </template>
  
  <script setup>
  import Header from '@/components/Header.vue'
  import ContactInfo from '@/components/ContactInfo.vue'
  import AboutMe from '~/components/AboutMe.vue'
  import Education from '@/components/Education.vue'
  import Experience from '@/components/Experience.vue'
  import Skills from '@/components/Skills.vue'
  import Seminars from '@/components/Seminars.vue'
  </script>
  
  <style src="~/assets/css/portfolio.css"></style>
  