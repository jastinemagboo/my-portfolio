<script setup>
import { ref } from 'vue'
import experienceData from '@/responsibilities.json'

const experiences = ref(experienceData)

const openMap = ref({})

const toggle = (id) => {
  openMap.value[id] = !openMap.value[id]
}

const isOpen = (id) => !!openMap.value[id]
</script>

<template>
  <section class="min-h-screen bg-gray-100 px-6 py-16 md:px-10 lg:px-16">
    <div class="mx-auto max-w-6xl">

      <!-- Header -->
      <div class="mb-14">
        <p class="mb-2 text-sm font-medium uppercase tracking-wider text-gray-500">
          Experience
        </p>

        <h2 class="text-3xl font-bold tracking-tight text-gray-800 md:text-4xl">
          Work Experience
        </h2>

        <p class="mt-3 max-w-2xl text-base leading-relaxed text-gray-600">
          My professional experience building, maintaining, and improving
          web applications across frontend and backend technologies.
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">

        <!-- Timeline line -->
        <div
          class="absolute left-[11px] top-2 hidden h-full w-px bg-gray-300 md:block"
        ></div>

        <div class="space-y-10">

          <article
            v-for="(exp, index) in experiences"
            :key="exp.id"
            class="relative md:pl-12"
          >

            <!-- Timeline dot -->
            <div
              class="absolute left-0 top-8 hidden h-6 w-6 items-center justify-center rounded-full border-4 border-gray-100 bg-gray-800 md:flex"
            ></div>

            <!-- Experience Card -->
            <div
              class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
            >

              <!-- Top -->
              <div class="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

                <div>
                  <p class="mb-2 text-sm font-medium uppercase tracking-wider text-gray-400">
                    {{ exp.startDate.split(' ')[1] || exp.startDate }}
                  </p>

                  <h3
                    class="text-2xl font-bold tracking-tight text-gray-800 md:text-3xl"
                  >
                    {{ exp.position }}
                  </h3>

                  <p class="mt-2 text-base font-semibold text-gray-600">
                    {{ exp.company }}
                  </p>
                </div>

                <span
                  class="w-fit rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600"
                >
                  {{ exp.startDate }} – {{ exp.endDate }}
                </span>

              </div>

              <!-- Divider -->
              <div class="my-6 border-t border-gray-100"></div>

              <!-- Responsibilities -->
              <div>
                <div class="mb-4 flex items-center justify-between">
                  <h4 class="text-base font-bold text-gray-800">
                    Key Contributions
                  </h4>

                  <button
                    type="button"
                    @click="toggle(exp.id)"
                    class="text-sm font-semibold text-gray-600 transition hover:text-gray-900"
                    :aria-expanded="isOpen(exp.id)"
                  >
                    {{ isOpen(exp.id) ? 'Show Less' : 'Show More' }}
                    <i
                      class="pi ml-1 text-xs"
                      :class="isOpen(exp.id) ? 'pi-chevron-up' : 'pi-chevron-down'"
                    ></i>
                  </button>
                </div>

                <ul class="space-y-3">
                  <li
                    v-for="responsibility in exp.responsibilities.slice(
                      0,
                      isOpen(exp.id) ? exp.responsibilities.length : 2
                    )"
                    :key="responsibility.id"
                    class="flex items-start gap-3 text-base leading-relaxed text-gray-600"
                  >
                    <i class="pi pi-check mt-1 text-xs text-gray-400"></i>

                    <span>
                      {{ responsibility.responsibility }}
                    </span>
                  </li>
                </ul>
              </div>

            </div>
          </article>

        </div>
      </div>

    </div>
  </section>
</template>