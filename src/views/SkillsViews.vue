<script setup>
import skillData from '@/skills.json'

const skills = skillData

const categoryIcons = {
  Frontend: 'pi pi-code',
  Backend: 'pi pi-server',
  Database: 'pi pi-database',
  'Tools & Workflow': 'pi pi-wrench',
}

const categoryDescriptions = {
  Frontend: 'Building responsive and interactive web interfaces.',
  Backend: 'Developing APIs and server-side applications.',
  Database: 'Working with data storage and database systems.',
  'Tools & Workflow': 'Tools I use for development and collaboration.',
}
</script>

<template>
  <section class="min-h-screen bg-gray-100 px-6 py-16 md:px-10 lg:px-16">
    <div class="mx-auto max-w-6xl">

      <!-- Header -->
      <div class="mb-12">
        <p class="mb-2 text-sm font-medium uppercase tracking-wider text-gray-500">
          Skills
        </p>

        <h2 class="text-3xl font-bold tracking-tight text-gray-800 md:text-4xl">
          Technologies & Tools
        </h2>

        <p class="mt-3 max-w-2xl text-base leading-relaxed text-gray-600">
          Technologies and tools I use to build modern web applications.
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid gap-6 md:grid-cols-2">
        <div
          v-for="(group, index) in skills"
          :key="group.category"
          class="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <!-- Category Header -->
          <div class="mb-6 flex items-start justify-between">
            <div class="flex items-center gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-colors duration-300 group-hover:bg-gray-800 group-hover:text-white"
              >
                <i :class="categoryIcons[group.category]"></i>
              </div>

              <div>
                <!-- <p class="text-xs font-medium tracking-wider text-gray-400">
                  {{ String(index + 1).padStart(2, '0') }}
                </p> -->

                <h3 class="text-lg font-semibold text-gray-800">
                  {{ group.category }}
                </h3>
              </div>
            </div>
          </div>

          <!-- Description -->
          <p class="mb-5 text-sm leading-relaxed text-gray-500">
            {{ categoryDescriptions[group.category] }}
          </p>

          <!-- Skills -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in group.skills"
              :key="skill"
              class="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-white hover:shadow-sm"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>