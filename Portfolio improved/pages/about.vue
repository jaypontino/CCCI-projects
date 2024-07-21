<template>
  <Navbar />
  <Sidebar />
  <section class="min-h-screen p-8">
    <h1 class="text-4xl font-bold mb-4 text-white shadow-lg">About Me</h1>
    <p class="text-xl text-white shadow-md">
      Third-year Bachelor of Science in Computer Science Student with foundational knowledge in programming. 
      Experienced in C++ and HTML through academic coursework and personal projects. Eager to learn and expand 
      my knowledge in a professional environment.
    </p>
  </section>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 2s ease-in-out;
}

.animate-fadeInUp {
  animation: fadeInUp 2s ease-in-out;
}
</style>
