<script setup>
import Hero from '@/components/Hero.vue'
import AboutCards from '@/components/AboutCards.vue'
import SkillsViews from './SkillsViews.vue'
</script>

<template>
  <Hero />
  <AboutCards />
  <SkillsViews :limit="4" :showButton="true" />
</template>
