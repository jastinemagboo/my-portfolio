<script setup>
import skillData from '@/skills.json'
import { ref } from 'vue'
import Skill from './Skill.vue'
import { RouterLink } from 'vue-router'

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
})

const skills = ref(skillData)
</script>

<template>
  <section class="bg-gray-100 px-10 py-10">
    <div class="container-xl m-auto">
      <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Browse Skills</h2>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
        <Skill
          v-for="skill in skills.slice(0, limit || skills.length)"
          :key="skill.id"
          :skill="skill"
        />
      </div>
    </div>
  </section>
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-24">
    <RouterLink
      to="/skills"
      class="block bg-gray-400 text-white text-center py-4 px-6 rounded-xl hover:text-gray-900"
      >View All Skills</RouterLink
    >
  </section>
</template>
