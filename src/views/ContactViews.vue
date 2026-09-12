<script setup>
import logo from '@/assets/Jastine.jpg'
</script>

<template>
  <section class="min-h-screen bg-gray-100 px-6 py-16 md:px-10 lg:px-16">
    <div class="mx-auto max-w-6xl">

      <!-- Section Header -->
      <div class="mb-12">
        <p class="mb-2 text-sm font-medium uppercase tracking-wider text-gray-500">
          Contact
        </p>

        <h2 class="text-3xl font-bold tracking-tight text-gray-800 md:text-4xl">
          Get in Touch
        </h2>

        <p class="mt-3 max-w-2xl text-base leading-relaxed text-gray-600">
          Interested in working together or have an opportunity you'd like
          to discuss? Feel free to reach out.
        </p>
      </div>

      <!-- Contact Card -->
      <div
        class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
      >
        <div class="grid md:grid-cols-[280px_1fr]">

          <!-- Profile -->
          <div
            class="flex flex-col items-center justify-center bg-gray-50 p-8 md:p-10"
          >
            <img
              :src="logo"
              alt="Jastine Magboo"
              loading="lazy"
              class="h-40 w-40 rounded-full border-4 border-white object-cover shadow-md md:h-44 md:w-44"
            />

            <h3 class="mt-5 text-xl font-bold text-gray-800">
              Jastine Magboo
            </h3>

            <p class="mt-1 text-sm font-medium text-gray-500">
              Full-Stack Web Developer
            </p>
          </div>

          <!-- Contact Details -->
          <div class="p-7 md:p-10">
            <div class="mb-7">
              <p class="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Contact Information
              </p>

              <h3 class="mt-2 text-2xl font-bold tracking-tight text-gray-800">
                Let's talk
              </h3>

              <p class="mt-2 max-w-xl text-sm leading-relaxed text-gray-500">
                I'm open to discussing web development opportunities,
                projects, and potential collaborations.
              </p>
            </div>

            <div class="space-y-4">

              <!-- Email -->
              <a
                href="mailto:jastinemagboo25@gmail.com"
                class="group flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:bg-white hover:shadow-sm"
              >
                <div
                  class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-gray-600 shadow-sm"
                >
                  <i class="pi pi-envelope text-lg"></i>
                </div>

                <div class="min-w-0">
                  <p class="text-xs font-medium uppercase tracking-wider text-gray-400">
                    Email
                  </p>

                  <p
                    class="mt-1 break-all text-sm font-semibold text-gray-800 group-hover:text-gray-600"
                  >
                    jastinemagboo25@gmail.com
                  </p>
                </div>
              </a>

              <!-- Phone -->
              <a
                href="tel:09156829379"
                class="group flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:bg-white hover:shadow-sm"
              >
                <div
                  class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-gray-600 shadow-sm"
                >
                  <i class="pi pi-phone text-lg"></i>
                </div>

                <div>
                  <p class="text-xs font-medium uppercase tracking-wider text-gray-400">
                    Phone
                  </p>

                  <p class="mt-1 text-sm font-semibold text-gray-800">
                    0915-682-9379
                  </p>
                </div>
              </a>

              <!-- Location -->
              <div
                class="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4"
              >
                <div
                  class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-gray-600 shadow-sm"
                >
                  <i class="pi pi-map-marker text-lg"></i>
                </div>

                <div>
                  <p class="text-xs font-medium uppercase tracking-wider text-gray-400">
                    Location
                  </p>

                  <p class="mt-1 text-sm font-semibold text-gray-800">
                    Makati City, Metro Manila
                  </p>
                </div>
              </div>

              <!-- LinkedIn -->
              <a
                href="https://www.linkedin.com/in/jastine-magboo-bb1779253"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:bg-white hover:shadow-sm"
              >
                <div
                  class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-gray-600 shadow-sm"
                >
                  <i class="pi pi-linkedin text-lg"></i>
                </div>

                <div class="min-w-0">
                  <p class="text-xs font-medium uppercase tracking-wider text-gray-400">
                    LinkedIn
                  </p>

                  <p
                    class="mt-1 flex items-center gap-1.5 text-sm font-semibold text-gray-800 group-hover:text-gray-600"
                  >
                    View LinkedIn Profile
                    <i class="pi pi-external-link text-xs"></i>
                  </p>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>