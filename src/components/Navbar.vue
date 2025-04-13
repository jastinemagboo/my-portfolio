<script setup>
import { ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()
const isActiveLink = (path) => route.path === path

const menuOpen = ref(false)
</script>

<template>
  <nav class="bg-gray-300 border-b">
    <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="text-2xl font-bold text-gray-900">Jastine</RouterLink>

        <!-- Hamburger icon (mobile only) -->
        <button
          class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white bg-gray-400 focus:outline-none"
          @click="menuOpen = !menuOpen"
        >
          <i :class="menuOpen ? 'pi pi-times' : 'pi pi-bars'"></i>
        </button>

        <!-- Menu Links -->
        <div
          :class="[
            menuOpen ? 'block' : 'hidden',
            'absolute z-10 md:static top-20 left-0 w-full md:w-auto bg-gray-300 md:flex md:items-center transition-all ',
          ]"
        >
          <div class="flex flex-col md:flex-row md:space-x-2 px-4 py-2 md:p-0 bg-gray-300">
            <RouterLink
              to="/"
              @click="menuOpen = false"
              :class="[
                isActiveLink('/') ? 'bg-gray-400 text-white' : 'hover:bg-gray-400 hover:text-white',
                'text-black',
                'px-3',
                'py-2',
                'rounded-md ',
              ]"
              >About</RouterLink
            >
            <RouterLink
              to="/skills"
              @click="menuOpen = false"
              :class="[
                isActiveLink('/skills')
                  ? 'bg-gray-400 text-white'
                  : 'hover:bg-gray-400 hover:text-white',
                'text-black',
                'px-3',
                'py-2',
                'rounded-md ',
              ]"
              >Skills</RouterLink
            >
            <RouterLink
              to="/experience"
              @click="menuOpen = false"
              :class="[
                isActiveLink('/experience')
                  ? 'bg-gray-400 text-white'
                  : 'hover:bg-gray-400 hover:text-white',
                'text-black',
                'px-3',
                'py-2',
                'rounded-md ',
              ]"
              >Experience</RouterLink
            >
            <!-- <RouterLink
              to="/project"
              @click="menuOpen = false"
              :class="[
                isActiveLink('/project')
                  ? 'bg-gray-400 text-white'
                  : 'hover:bg-gray-400 hover:text-white',
                'text-black',
                'px-3',
                'py-2',
                'rounded-md ',
              ]"
              >Projects</RouterLink
            > -->
            <RouterLink
              to="/contact"
              @click="menuOpen = false"
              :class="[
                isActiveLink('/contact')
                  ? 'bg-gray-400 text-white'
                  : 'hover:bg-gray-400 hover:text-white',
                'text-black',
                'px-3',
                'py-2',
                'rounded-md ',
              ]"
              >Contact</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
