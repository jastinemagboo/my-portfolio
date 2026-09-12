<script setup>
import { ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)

const isActiveLink = (path) => route.path === path

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Skills', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]
</script>

<template>
  <nav class="sticky top-0 z-50 border-b border-gray-300 bg-gray-200/95 shadow-sm backdrop-blur">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <RouterLink
          to="/"
          class="text-xl font-bold tracking-tight text-gray-900 transition-opacity hover:opacity-70"
          @click="menuOpen = false"
        >
          Jastine
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden items-center gap-1 md:flex">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            :class="[
              isActiveLink(link.path)
                ? 'bg-gray-800 text-white shadow-sm'
                : 'text-gray-700 hover:bg-gray-300 hover:text-gray-900',
              'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
            ]"
          >
            {{ link.name }}
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-full bg-gray-300 p-2.5 text-gray-800 transition-colors hover:bg-gray-400 md:hidden"
          @click="menuOpen = !menuOpen"
          aria-label="Toggle navigation menu"
        >
          <i :class="menuOpen ? 'pi pi-times' : 'pi pi-bars'"></i>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="menuOpen"
        class="border-t border-gray-300 py-3 md:hidden"
      >
        <div class="flex flex-col gap-1">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="menuOpen = false"
            :class="[
              isActiveLink(link.path)
                ? 'bg-gray-800 text-white'
                : 'text-gray-700 hover:bg-gray-300',
              'rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200',
            ]"
          >
            {{ link.name }}
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
