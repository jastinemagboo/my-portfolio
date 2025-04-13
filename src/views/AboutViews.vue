<script setup>
import Hero from '@/components/Hero.vue'
import AboutCards from '@/components/AboutCards.vue'
import Skills from '@/components/Skills.vue'
</script>

<template>
  <Hero />
  <AboutCards />
  <Skills :limit="4" :showButton="true" />
</template>
