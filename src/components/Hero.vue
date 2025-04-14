<script setup>
defineProps({
  title: {
    type: String,
    default: 'Jastine Magboo',
  },
  subTitle: {
    type: String,
    default: 'Junior Full Stack Web Developer',
  },
  about: {
    type: String,
    default:
      'With over two years of full-stack development experience, I’ve worked across frontend and backend technologies to build and maintain web applications.',
  },
})
</script>

<template>
  <section class="bg-gray-100">
    <div class="flex flex-col md:flex-row lg:flex-row">
      <div
        class="bg-gray-200 flex items-center justify-center pt-16 pb-4 md:items-end md:justify-end md:py-28 md:pr-6 md:w-1/2 lg:py-32 lg:pr-6"
      >
        <img
          src="../assets/Jastine.jpg"
          alt="Jastine Magboo"
          class="h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 shadow-md rounded-2xl"
        />
      </div>

      <div
        class="bg-gray-200 flex flex-col items-center justify-center text-center pb-16 pt-4 md:w-1/2 md:items-start md:py-28 md:justify-center md:pl-6 lg:pl-6"
      >
        <div class="text-center">
          <p class="my-2 text-xl text-gray-900">Hello, I'm</p>
          <h1 class="text-3xl font-extrabold text-gray-800 md:text-4xl lg:text-5xl">
            {{ title }}
          </h1>
          <p class="my-4 text-xl text-gray-900">
            {{ subTitle }}
          </p>

          <div class="flex justify-center gap-4">
            <a href="/JastineMagboo_Resume_2025.pdf" download>
              <button
                class="flex items-center shadow-md bg-gray-400 text-white rounded-full py-2 px-4 hover:bg-gray-500 hover:text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 transition-all"
              >
                <i class="pi pi-file-pdf text-white mr-2 text-lg"></i>
                Resume
              </button>
            </a>
            <a href="mailto:jastinemagboo25@gmail.com" download>
              <button
                class="flex items-center shadow-md bg-gray-400 text-white rounded-full py-2 px-4 hover:bg-gray-500 hover:text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 transition-all"
              >
                <i class="pi pi-envelope text-white mr-2 text-lg"></i>
                Hire Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
