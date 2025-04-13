<script setup>
import { ref } from 'vue'
import experienceData from '@/responsibilities.json'

const experiences = ref(experienceData)
</script>

<template>
  <section class="bg-gray-100">
    <div class="container m-auto px-8 py-12 lg:px-16">
      <div class="grid grid-cols-1 w-full md:w-full gap-6">
        <main>
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <div class="text-gray-900 mb-4">Work Experience</div>
            <h1 class="text-3xl font-bold mb-2 text-gray-800">Junior Full Stack Web Developer</h1>
            <div class="mb-2 flex align-middle justify-center md:justify-start">
              <p class="text-gray-900">JourneyTech, Inc.</p>
            </div>
            <div class="mb-4 flex align-middle justify-center md:justify-start">
              <p class="text-gray-900 italic">November 2022 - March 2025</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-gray-900 text-lg font-bold mb-6">Duties and Responsibilities</h3>

            <p v-for="experience in experiences" class="mb-4 text-gray-900">
              <i class="pi pi-circle-fill scale-50 ml-6 mr-2"></i>
              {{ experience.responsibility }}
            </p>
          </div>
        </main>
      </div>
    </div>
  </section>
</template>
