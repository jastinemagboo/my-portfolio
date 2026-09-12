<script setup>
defineProps({
  skill: Object,
})
</script>

<template>
  <div
    class="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
  >
    {{ skill.title }}
  </div>
</template>