<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="py-2">
    <div class="container-xl m-auto">
      <div class="grid grid-cols-1 gap-4 p-8 rounded-lg md:grid-cols-2">
        <div class="bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold text-gray-800">Experience</h2>
          <p class="mt-2 mb-4 text-gray-900">Browse my work experience</p>
          <RouterLink
            to="/experience"
            class="inline-block bg-gray-400 text-white rounded-lg px-4 py-2 hover:bg-gray-400 hover:text-gray-900"
          >
            Browse Experience
          </RouterLink>
        </div>
        <!-- <div class="bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold text-gray-800">Project</h2>
          <p class="mt-2 mb-4 text-gray-900">Browse my Projects</p>
          <a
            href="/project"
            class="inline-block bg-gray-400 text-white rounded-lg px-4 py-2 hover:bg-gray-400 hover:text-gray-900"
          >
            Browse Project
          </a>
        </div> -->
        <div class="bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold text-gray-800">Contact</h2>
          <p class="mt-2 mb-4 text-gray-900">Connect with me</p>
          <RouterLink
            to="/contact"
            class="inline-block bg-gray-400 text-white rounded-lg px-4 py-2 hover:bg-gray-400 hover:text-gray-900"
          >
            Contact Me
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
