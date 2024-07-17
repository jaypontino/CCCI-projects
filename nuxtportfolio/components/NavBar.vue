<template>
  <nav>
    <NuxtLink to="/" class="nav-link">Home</NuxtLink>
    <NuxtLink to="/about" class="nav-link">About & Contact</NuxtLink>
    <NuxtLink to="/experience" class="nav-link">Experience & Seminars</NuxtLink>
    <NuxtLink to="/education" class="nav-link">Education & Skills</NuxtLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #8a2be2;
  padding: 10px 0;
  border-bottom: 2px solid #4a148c;
}

.nav-link {
  flex: 1;
  text-decoration: none;
  color: white;
  text-align: center;
  padding: 10px 0;
  font-size: 1.2em;
}

.nav-link:hover {
  background-color: #4a148c;
  text-decoration: underline;
}
</style>
