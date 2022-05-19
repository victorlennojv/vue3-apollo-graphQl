<template>
  <div class="flex items-center justify-center w-full mb-12">
    <label for="toogle" class="flex items-center cursor-pointer">
      <!-- toggle -->
      <div class="relative">
        <!-- input -->
        <input id="toogle" type="checkbox" class="sr-only" />
        <!-- line -->
        <div class="w-10 h-4 bg-gray-300 rounded-full shadow-inner"></div>
        <!-- dot -->
        <div
          class="dot absolute w-6 h-6 bg-gray-100 rounded-full shadow -left-1 -top-1 transition"
        ></div>
      </div>
      <!-- label -->
      <div class="ml-3 text-gray-700 font-medium">
        {{ props.label }}
      </div>
    </label>
  </div>
</template>

<script setup>
  const props = defineProps({
    label: {
      type: String,
      defaul: 'Toggle',
    },
  })
</script>

<style lang="postcss" scoped>
  input:checked ~ .dot {
    transform: translateX(100%);
    background-color: #17e8b0;
  }
</style>
