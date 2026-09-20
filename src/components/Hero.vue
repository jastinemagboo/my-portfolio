<script setup>
defineProps({
  title: {
    type: String,
    default: 'Jastine Magboo',
  },
  subTitle: {
    type: String,
    default: 'Full-Stack Web Developer',
  },
  about: {
    type: String,
    default:
      'A web developer with 3+ years of professional experience building modern and responsive web applications across frontend and backend technologies.',
  },
})
</script>

<template>
  <section class="bg-gray-100">
    <div class="flex flex-col md:flex-row">
      <!-- Profile Image -->
      <div
        class="flex items-center justify-center bg-gray-100 px-6 pt-16 pb-8 md:w-1/2 md:items-end md:justify-end md:py-28 md:pr-10 lg:py-32"
      >
        <div class="overflow-hidden rounded-2xl shadow-md">
          <img
            src="../assets/Jastine.jpg"
            alt="Jastine Magboo - Full-Stack Web Developer"
            class="h-64 w-64 object-cover object-[top_center] md:h-80 md:w-80 lg:h-96 lg:w-96"
          />
        </div>
      </div>

      <!-- Hero Content -->
      <div
        class="flex items-center justify-center bg-gray-100 px-6 pt-4 pb-16 text-center md:w-1/2 md:justify-start md:py-28 md:pl-10 md:text-left lg:pl-12"
      >
        <div class="max-w-xl">
          <p class="mb-2 text-lg font-medium text-gray-600">Hello, I'm</p>

          <h1 class="text-4xl font-extrabold tracking-tight text-gray-800 md:text-5xl lg:text-6xl">
            {{ title }}
          </h1>

          <p class="mt-4 text-xl font-semibold text-gray-700 md:text-2xl">
            {{ subTitle }}
          </p>

          <p class="mt-5 max-w-lg text-base leading-relaxed text-gray-600 md:text-lg">
            {{ about }}
          </p>

          <!-- CTA Buttons -->
          <div class="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
            <RouterLink
              to="/projects"
              class="flex items-center rounded-full bg-gray-800 px-5 py-2.5 text-sm font-medium text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-gray-700"
            >
              <i class="pi pi-code mr-2"></i>
              Browse Projects
            </RouterLink>

            <a
              href="/JastineMagboo_Resume_2026.pdf"
              download
              class="flex items-center rounded-full bg-gray-400 px-5 py-2.5 text-sm font-medium text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-gray-500"
            >
              <i class="pi pi-file-pdf mr-2"></i>
              Resume
            </a>
            <RouterLink
              to="/experience"
              class="flex items-center rounded-full border border-gray-400 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-md transition duration-300 hover:-translate-y-1 hover:bg-gray-50"
            >
              <i class="pi pi-briefcase mr-2"></i>
              Experience
            </RouterLink>
          </div>

          <!-- Tech Stack -->
          <div class="mt-8">
            <p class="mb-3 text-sm font-medium text-gray-500">Currently working with</p>

            <div class="flex flex-wrap justify-center gap-2 md:justify-start">
              <span
                v-for="tech in ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Firestore']"
                :key="tech"
                class="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm"
              >
                {{ tech }}
              </span>

              <RouterLink
                to="/skills"
                class="flex items-center rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-gray-700"
              >
                View All Skills
                <i class="pi pi-arrow-up-right ml-1.5 text-[10px]"></i>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <footer class="border-t border-gray-200 bg-gray-100/95">
      <div class="mx-auto flex items-center justify-center gap-3 px-6 py-4">
        <p class="text-xs text-gray-400">© {{ new Date().getFullYear() }} Jastine Magboo</p>

        <span class="text-xs text-gray-400">·</span>

        <RouterLink
          to="/contact"
          class="text-xs font-medium text-gray-600 underline decoration-gray-300 underline-offset-4 transition-colors duration-300 hover:text-gray-900 hover:decoration-gray-700"
        >
          Contact Me
        </RouterLink>
      </div>
    </footer>
  </section>
</template>
