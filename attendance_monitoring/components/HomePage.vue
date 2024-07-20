<template>
  <div class="min-h-lvh p-6 bg-primary-light rounded-lg shadow-md text-center flex flex-col justify-center items-center">
    <h1 class="text-5xl font-waltograph mb-4 text-center">Welcome to Attendance Monitoring</h1>
    <p class="mb-4 text-center">Would you like to see the student's list?</p>
    <nuxt-link to="/attendance" class="btn">OJT Attendance List</nuxt-link>
    <p class="mt-4 text-center">Or</p>
    <nuxt-link to="/create-attendance" class="btn mt-2">Create Attendance List</nuxt-link>
  </div>
</template>

<script setup>

</script>

<style scoped>
.btn {
  background-color: blueviolet;
  color: bisque;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-align: center;
  display: inline-block;
  margin: 0.25rem 0;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.btn:hover {
  color: rebeccapurple;
  background-color: bisque;
}
</style>
