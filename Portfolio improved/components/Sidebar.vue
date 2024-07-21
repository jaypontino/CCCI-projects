<template>
  
  <div class="sidebar fixed top-0 left-0 h-full bg-opacity-10 bg-purple-300 text-purple-600 p-4 pt-16 w-64 z-20">
    <img src="/assets/image.png" class="flex items-center w-32 h-32 rounded-full mx-auto mb-4 border-2 border-purple-700 transform hover:scale-105 transition duration-300" alt="Profile Picture"/>
    <h1 class="text-center text-2xl font-bold animate-fadeIn">Johara B. Pontino</h1>
    <ul class="space-y-4">
      <li><a href="#home" class="flex items-center"><img src="/assets/Homeicon.png" alt="Home" class="w-6 h-6 mr-2"/> Home</a></li>
      <li><a href="#about" class="flex items-center"><img src="/assets/aboutme.jpg" alt="About" class="w-6 h-6 mr-2"/> About</a></li>
      <li><a href="#portfolio" class="flex items-center"><img src="/assets/education.png" alt="Portfolio" class="w-6 h-6 mr-2"/> Portfolio</a></li>
      <li><a href="#contact" class="flex items-center"><img src="/assets/contacts.jpg" alt="Contact" class="w-6 h-6 mr-2"/> Contact</a></li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  background: #c4b5fd;
  color:#9333ea;
}
</style>
