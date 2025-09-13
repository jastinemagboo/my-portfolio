<script setup>
import { ref, reactive } from 'vue'
import experienceData from '@/responsibilities.json'

const experiences = ref(experienceData)

const openMap = reactive({})

function toggle(id) {
  openMap[id] = !openMap[id]
}
function isOpen(id) {
  return !!openMap[id]
}
</script>

<template>
  <section class="bg-gray-100">
    <div class="mx-auto max-w-7xl px-8 py-12 lg:px-16 min-h-screen">
      <h2 class="mb-6 text-center text-3xl font-bold text-gray-900">Work Experience</h2>

      <div>
        <main class="grid grid-cols-1 gap-6">
          <article
            v-for="exp in experiences"
            :key="exp.id"
            class="bg-white p-6 rounded-lg shadow-md md:text-left"
          >
            <h1 class="text-3xl font-bold mb-2 text-center md:text-left text-gray-800">
              {{ exp.position }}
            </h1>

            <div class="mb-2 flex items-center justify-center md:justify-start">
              <p class="text-gray-900">{{ exp.company }}</p>
            </div>

            <div class="mb-4 flex items-center justify-center md:justify-start">
              <p class="text-gray-900 italic">{{ exp.startDate }} - {{ exp.endDate }}</p>
            </div>

            <div class="flex justify-center md:justify-start">
              <button
                type="button"
                @click="toggle(exp.id)"
                class="inline-flex items-center gap-2 rounded-full border border-gray-400 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 transition"
                :aria-expanded="isOpen(exp.id)"
                :aria-controls="`resp-${exp.id}`"
              >
                {{ isOpen(exp.id) ? 'Hide' : 'View' }} Duties and Responsibilities
                <span
                  class="inline-block transition-transform"
                  :class="{ 'rotate-180': isOpen(exp.id) }"
                  aria-hidden="true"
                  >▾</span
                >
              </button>
            </div>

            <div
              :id="`resp-${exp.id}`"
              class="grid transition-[grid-template-rows] duration-300 ease-in-out mt-6"
              :class="isOpen(exp.id) ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
            >
              <div class="min-h-0 overflow-hidden">
                <h3 class="text-gray-900 text-center md:text-left text-lg font-bold mb-6">
                  Duties and Responsibilities
                </h3>

                <ul class="space-y-3">
                  <li
                    v-for="r in exp.responsibilities"
                    :key="r.id"
                    class="text-gray-900 flex items-start"
                  >
                    <i class="pi pi-circle-fill text-[8px] leading-6 mt-1.5 mr-2"></i>
                    <span>{{ r.responsibility }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  </section>
</template>
