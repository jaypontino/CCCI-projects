<!-- pages/portfolio.vue -->
<template>
    <section>
      <h1 class="text-4xl font-bold mb-4 text-white shadow-lg">Portfolio</h1>
      <div class="mb-8">
        <h2 class="text-3xl font-bold text-purple-800">Education</h2>
        <ul class="list-disc list-inside text-justify text-white">
          <li>Datu Mamintal Adiong SR. NHS (2019-2020)</li>
          <li>Philippine Integrated School INC. (2015-2016)</li>
          <li>Quezon National High School (2017)</li>
          <li>Datu Mamintal Adiong SR. NHS (2018) - Senior High</li>
          <li>MSU-Main Campus (2021-Present) - Higher Education</li>
        </ul>
      </div>
      <div class="mb-8">
        <h2 class="text-3xl font-bold text-purple-800">Skills</h2>
        <ul class="list-disc list-inside text-justify text-white">
          <li>Problem-solving</li>
          <li>Strong Communication</li>
          <li>Computer Literacy</li>
          <li>Project Management tools</li>
          <li>Design Thinking</li>
        </ul>
      </div>
      <div>
        <h2 class="text-3xl font-bold text-purple-800">Experience</h2>
        <!-- Add experience content here -->
      </div>
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
  