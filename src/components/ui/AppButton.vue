<template>
  <div class="m-2">
    <button
      class="bg-blue-500 uppercase hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full text-sm active:bg-blue-600"
      @click="emit('button:submit')"
    >
      {{ props.text }}
    </button>
  </div>
</template>

<script setup>
  const emit = defineEmits(['button:submit'])

  const props = defineProps({
    text: {
      type: String,
      default: 'Button',
    },
  })
</script>

<style scoped></style>
