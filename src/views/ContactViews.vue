<script setup>
import logo from '@/assets/Jastine.jpg'
</script>
<template>
  <section class="bg-gray-100 px-12 py-10 min-h-screen md:px-20">
    <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">My Contacts</h2>

    <div class="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <!-- Profile Image -->
      <div class="bg-gray-200 flex justify-center p-8">
        <img
          :src="logo"
          alt="Jastine Magboo"
          loading="lazy"
          class="h-48 w-48 rounded-full border-4 border-white shadow-md"
        />
      </div>

      <!-- Contact Info -->
      <div class="p-8 space-y-2">
        <div class="flex items-center">
          <i class="pi pi-map-marker mr-4 text-xl text-orange-700"></i>
          <p class="text-lg text-gray-900">Makati City, Metro Manila</p>
        </div>

        <div class="flex items-center">
          <i class="pi pi-envelope mr-4 text-xl text-red-600"></i>
          <a
            href="mailto:jastinemagboo25@gmail.com"
            class="text-lg text-gray-900 hover:underline break-all"
          >
            jastinemagboo25@gmail.com
          </a>
        </div>

        <div class="flex items-center">
          <i class="pi pi-phone mr-4 text-xl text-green-700"></i>
          <a href="tel:09156829379" class="text-lg text-gray-900 hover:underline">0915-682-9379</a>
        </div>

        <!-- Social Links -->
        <div class="flex gap-4 pt-4">
          <a
            href="https://www.linkedin.com/in/jastine-magboo-bb1779253"
            target="_blank"
            rel="noopener noreferrer"
            class="transition transform hover:-translate-y-1 hover:scale-110"
          >
            <i class="pi pi-linkedin text-blue-700 text-xl"></i>
          </a>

          <a
            href="https://www.facebook.com/jastinemagbooo"
            target="_blank"
            rel="noopener noreferrer"
            class="transition transform hover:-translate-y-1 hover:scale-110"
          >
            <i class="pi pi-facebook text-blue-600 text-xl"></i>
          </a>

          <a
            href="https://www.instagram.com/jastine_magboo/"
            target="_blank"
            rel="noopener noreferrer"
            class="transition transform hover:-translate-y-1 hover:scale-110"
          >
            <i class="pi pi-instagram text-pink-500 text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
