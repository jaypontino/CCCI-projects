<template>
  <div class="bg-cover bg-center min-h-screen" :style="{ backgroundImage: 'url(/mnt/data/bgicon.jpg)' }">
    <Navbar />
    <Sidebar />
    <div class="pl-64 pt-16">
      <section id="home" class="min-h-screen flex items-center justify-center bg-opacity-10 bg-purple-300 text-purple-600">
        <div>
          <h1 class="text-5xl font-bold">Welcome to My Portfolio</h1>
          <p class="text-xl mt-4">Scroll down for more information.</p>
        </div>
      </section>

      <section id="about" class="min-h-screen flex items-center justify-center bg-opacity-10 bg-purple-300 text-purple-600">
        <div>
          <h1 class="text-4xl font-bold mb-4">About Me</h1>
          <p class="text-xl">
            Third-year Bachelor of Science in Computer Science Student with foundational knowledge in programming. 
            Experienced in C++ and HTML through academic coursework and personal projects. Eager to learn and expand 
            my knowledge in a professional environment.
          </p>
        </div>
      </section>

      <section id="portfolio" class="min-h-screen flex items-center justify-center bg-opacity-10 bg-purple-300 text-purple-600">
        <div>
          <div class="mb-8">
            <h2 class="text-3xl font-bold">Education</h2>
            <ul class="list-disc list-inside">
              <li>Datu Mamintal Adiong SR. NHS (2019-2020)</li>
              <li>Philippine Integrated School INC. (2015-2016)</li>
              <li>Quezon National High School (2017)</li>
              <li>Datu Mamintal Adiong SR. NHS (2018) - Senior High</li>
              <li>MSU-Main Campus (2021-Present) - Higher Education</li>
            </ul>
          </div>
          <div class="mb-8">
            <h2 class="text-3xl font-bold">Skills</h2>
            <ul class="list-disc list-inside">
              <li>Problem-solving</li>
              <li>Strong Communication</li>
              <li>Computer Literacy</li>
              <li>Project Management tools</li>
              <li>Design Thinking</li>
            </ul>
          </div>
          <div class="mb-8">
            <h2 class="text-3xl font-bold">Experience</h2>
            <ul class="list-disc list-inside">
              <li class="text-xl">Organizer for Digital Wellness: Navigating a Balanced Life in a Technology Driven World (SEMINAR)</li>
              <li class="text-xl">Data Gathering for KASABA Project: A Maranao Survival Dictionary</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" class="min-h-screen flex items-center justify-center bg-opacity-10 bg-purple-300 text-purple-600">
        <div>
          <h1 class="text-4xl font-bold mb-4">Contact</h1>
          <p class="text-xl">Feel free to reach out to me through the following platforms:</p>
          <SocialLinks class="mt-4" />
          <p class="text-xl mt-4">Contact No: 123-456-7890</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import Sidebar from '~/components/Sidebar.vue'
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

section {
  padding: 2rem;
}

.bg-cover {
  background-size: cover;
  background-position: center;
}
</style>
