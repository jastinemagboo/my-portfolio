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
  'lucide icon': 'simple-icons:lucide', // a lucide glyph
  Axios: 'simple-icons:axios',
  'Node.js': 'simple-icons:nodedotjs',
  Express: 'simple-icons:express',
  PostgreSQL: 'simple-icons:postgresql',
  'Vue 3': 'simple-icons:vuedotjs',
  JavaScript: 'simple-icons:javascript',
}

const iconTone = {
  React: 'text-[#61DAFB]',
  TypeScript: 'text-[#3178C6]',
  TailwindCSS: 'text-[#06B6D4]',
  Shadcn: 'text-[#111827]',
  'lucide icon': 'text-[#F2514B]',
  Axios: 'text-[#5A29E4]',
  'Node.js': 'text-[#339933]',
  Express: 'text-[#000000]',
  PostgreSQL: 'text-[#336791]',
  'Vue 3': 'text-[#42B883]',
  JavaScript: 'text-[#F7DF1E]',
}
</script>

<template>
  <section class="bg-gray-100 px-6 py-12 min-h-screen">
    <div class="mx-auto max-w-6xl">
      <h2 class="mb-6 text-center text-3xl font-bold text-gray-900">Browse Projects</h2>

      <div>
        <main class="grid grid-cols-1 gap-6">
          <article
            v-for="p in projects"
            :key="p.id"
            class="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:shadow-lg"
          >
            <div class="space-y-4 p-5">
              <header>
                <h3 class="text-2xl font-bold mb-2 text-gray-900">{{ p.title }}</h3>
                <p class="mt-2 text-md text-gray-800">
                  {{ p.description }}
                </p>
              </header>

              <ul class="flex flex-wrap flex-row gap-2">
                <li
                  v-for="(t, i) in p.stack ?? []"
                  :key="i"
                  class="inline-flex gap-1.5 rounded-full border border-gray-400 px-2 py-2 text-xs font-medium text-gray-800 transition ease-in-out hover:-translate-y-1 hover:scale-100"
                  :title="t"
                >
                  <Icon
                    :icon="tech2icon[t] || 'lucide:code-2'"
                    :class="['h-3.5 w-3.5', iconTone[t] || 'text-gray-500']"
                  />
                  <span class="text-gray-800">{{ t }}</span>
                </li>
              </ul>

              <div class="flex flex-wrap gap-2 pt-2">
                <a
                  v-if="p.links?.live"
                  :href="p.links.live"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-1 rounded-full border border-gray-400 shadow-lg px-4 py-2 text-gray-800 text-xs font-semibold transition ease-in-out hover:-translate-y-1 hover:scale-100"
                >
                  <img
                    v-if="p.logo"
                    :src="p.logo"
                    :alt="`${p.title} logo`"
                    class="h-5 w-5 rounded-sm object-contain"
                    loading="lazy"
                  />
                  <span>View {{ p.title }}</span>
                </a>
                <a
                  v-if="p.links?.repo"
                  :href="p.links.repo"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-1 shadow-lg rounded-full border border-gray-400 px-4 py-2 text-xs font-semibold text-gray-800 transition ease-in-out hover:-translate-y-1 hover:scale-100"
                >
                  <Icon
                    icon="simple-icons:github"
                    class="h-4 w-4 text-[#181717]"
                    aria-hidden="true"
                  />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  </section>
</template>
