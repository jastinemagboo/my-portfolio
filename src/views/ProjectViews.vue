<script setup>
import { ref } from 'vue'
import projectData from '@/project.json'
import { Icon } from '@iconify/vue'

const projects = ref(projectData)

const tech2icon = {
  React: 'simple-icons:react',
  TypeScript: 'simple-icons:typescript',
  TailwindCSS: 'simple-icons:tailwindcss',
  Shadcn: 'radix-icons:component-1',
  'lucide icon': 'simple-icons:lucide',
  Axios: 'simple-icons:axios',
  'Node.js': 'simple-icons:nodedotjs',
  Express: 'simple-icons:express',
  PostgreSQL: 'simple-icons:postgresql',
  'Vue 3': 'simple-icons:vuedotjs',
  JavaScript: 'simple-icons:javascript',
}

const iconTone = {
  React: 'group-hover:text-[#61DAFB]',
  TypeScript: 'group-hover:text-[#3178C6]',
  TailwindCSS: 'group-hover:text-[#06B6D4]',
  Shadcn: 'group-hover:text-[#111827]',
  'lucide icon': 'group-hover:text-[#F2514B]',
  Axios: 'group-hover:text-[#5A29E4]',
  'Node.js': 'group-hover:text-[#339933]',
  Express: 'group-hover:text-black',
  PostgreSQL: 'group-hover:text-[#336791]',
  'Vue 3': 'group-hover:text-[#42B883]',
  JavaScript: 'group-hover:text-[#F7DF1E]',
}
</script>

<template>
  <section class="min-h-screen bg-gray-100 px-6 py-16 md:px-10 lg:px-16">
    <div class="mx-auto max-w-6xl">
      <!-- Section Header -->
      <div class="mb-12">
        <p class="mb-2 text-sm font-medium uppercase tracking-wider text-gray-500">Projects</p>

        <h2 class="text-3xl font-bold tracking-tight text-gray-800 md:text-4xl">
          Things I've Built
        </h2>

        <p class="mt-3 max-w-2xl text-base leading-relaxed text-gray-600">
          A selection of web applications and personal projects I've built to explore technologies
          and solve real-world problems.
        </p>
      </div>

      <!-- Projects -->
      <div class="grid gap-6">
        <article
          v-for="p in projects"
          :key="p.id"
          class="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
        >
          <!-- Project Header -->
          <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h3
                class="text-2xl font-bold tracking-tight text-gray-800 transition-colors duration-300 group-hover:text-gray-900"
              >
                {{ p.title }}
              </h3>

              <p class="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">
                {{ p.description }}
              </p>
            </div>

            <!-- Project Number -->
            <span class="hidden text-sm font-medium tracking-wider text-gray-300 md:block">
              {{ String(p.id).padStart(2, '0') }}
            </span>
          </div>

          <!-- Divider -->
          <div class="my-6 border-t border-gray-100"></div>

          <!-- Tech Stack -->
          <div>
            <p class="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Built with
            </p>

            <ul class="flex flex-wrap gap-2">
              <li
                v-for="(t, i) in p.stack ?? []"
                :key="i"
                class="group/tech inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:bg-white hover:shadow-sm"
                :title="t"
              >
                <Icon
                  :icon="tech2icon[t] || 'lucide:code-2'"
                  :class="[
                    'h-4 w-4 text-gray-500 transition-colors duration-200',
                    iconTone[t] || 'group-hover/tech:text-gray-800',
                  ]"
                />

                <span>{{ t }}</span>
              </li>
            </ul>
          </div>

          <!-- Actions -->
          <div class="mt-7 flex flex-wrap gap-3">
            <a
              v-if="p.links?.live"
              :href="p.links.live"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-400 hover:bg-gray-200 hover:shadow-sm"
            >
              <img
                v-if="p.logo"
                :src="p.logo"
                :alt="`${p.title} logo`"
                class="h-4 w-4 rounded-sm object-contain"
                loading="lazy"
              />

              <span>View Project</span>

              <Icon icon="lucide:external-link" class="h-4 w-4" />
            </a>

            <a
              v-if="p.links?.repo"
              :href="p.links.repo"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm"
            >
              <Icon icon="simple-icons:github" class="h-4 w-4" aria-hidden="true" />

              <span>View GitHub</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
