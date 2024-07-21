<!-- pages/contact.vue -->
<template>
  <Sidebar/>
  <section>
    <h1 class="text-4xl font-bold mb-4">Contact</h1>
    <p class="text-xl">Feel free to reach out to me through the following platforms:</p>
    <SocialLinks class="mt-4" />
    <p class="text-xl mt-4">Contact No: 09563384753</p>
  </section>
</template>

<script setup>
import SocialLinks from '~/components/SocialLinks.vue'
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fadeIn {
  animation: fadeIn 2s ease-in-out;
}
</style>
