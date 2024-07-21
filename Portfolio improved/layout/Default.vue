<template>
  <a-layout class="min-h-screen bg-cover bg-fixed">
    <a-layout-sider width="250" class="site-layout-background bg-purpleTheme fixed top-0 h-screen overflow-auto">
      <div class="logo p-4 text-center">
        <img src="~/assets/image.png" class="w-32 h-32 rounded-full mx-auto my-4 border-4 border-white" alt="Profile Picture"/>
      </div>
      <a-menu
        theme="dark"
        mode="inline"
        :defaultSelectedKeys="[currentPage]"
        class="bg-purpleTheme"
      >
        <a-menu-item key="home" icon="home">
          <nuxt-link to="#home">
            <div class="flex items-center justify-center p-2 rounded-full bg-purple-500">
              <img src="~/assets/icons/homeicon.png" alt="Home" class="w-6 h-6 mr-2" />
              <span>Home</span>
            </div>
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="about" icon="user">
          <nuxt-link to="#about">
            <div class="flex items-center justify-center p-2 rounded-full bg-purple-500">
              <img src="~/assets/icons/aboutme.png" alt="About" class="w-6 h-6 mr-2" />
              <span>About</span>
            </div>
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="portfolio" icon="profile">
          <nuxt-link to="#portfolio">
            <div class="flex items-center justify-center p-2 rounded-full bg-purple-500">
              <img src="~/assets/icons/education.png" alt="Portfolio" class="w-6 h-6 mr-2" />
              <span>Portfolio</span>
            </div>
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="contact" icon="message">
          <nuxt-link to="#contact">
            <div class="flex items-center justify-center p-2 rounded-full bg-purple-500">
              <img src="~/assets/icons/contacts.jpg" alt="Contact" class="w-6 h-6 mr-2" />
              <span>Contact</span>
            </div>
          </nuxt-link>
        </a-menu-item>
      </a-menu>
      <div class="social-links my-4 text-center">
        <SocialLinks />
      </div>
    </a-layout-sider>
    <a-layout class="ml-64">
      <nav class="bg-gray-800 p-4 fixed top-0 left-0 w-full z-50">
        <div class="container mx-auto flex justify-between items-center">
          <div class="text-white text-lg font-bold">My Portfolio</div>
          <div>
            <nuxt-link to="#home" class="text-purple-300 mx-4">Home</nuxt-link>
            <nuxt-link to="#about" class="text-white mx-4">About</nuxt-link>
            <nuxt-link to="#portfolio" class="text-white mx-4">More information</nuxt-link>
            <nuxt-link to="#contact" class="text-white mx-4">Contact</nuxt-link>
          </div>
        </div>
      </nav>
      <a-layout-content style="padding: 50px; margin-top: 64px;">
        <nuxt-page />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { computed } from 'vue'
import SocialLinks from '~/components/SocialLinks.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentPage = computed(() => route.hash)
</script>

<style scoped>

.site-layout-background {
  position: fixed;
  top: 80px; 
  height: calc(100vh - 64px);
  overflow-y: auto;
}
</style>
