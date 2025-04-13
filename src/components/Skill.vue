<script setup>
import { computed, ref, defineProps } from 'vue'

const props = defineProps({
  skill: Object,
})

const showFullDescription = ref(false)

const toggleFullDescription = () => {
  showFullDescription.value = !showFullDescription.value
}

const truncatedDescription = computed(() => {
  let description = props.skill.description

  if (!showFullDescription.value) {
    description = description.substring(0, 110) + '...'
  }
  return description
})
</script>
<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-2">
        <div class="text-gray-900 my-2">{{ skill.type }}</div>
        <h3 class="text-xl font-bold text-gray-800">{{ skill.title }}</h3>
      </div>

      <div>
        <div class="text-gray-900">
          {{ truncatedDescription }}
        </div>
        <button
          @click="toggleFullDescription"
          class="text-gray-900 font-bold hover:text-gray-500 py-2"
        >
          {{ showFullDescription ? 'Less' : 'More' }}
        </button>
      </div>
    </div>
  </div>
</template>
