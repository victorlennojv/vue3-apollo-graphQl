<template>
  <div class="inline-block relative w-64">
    <select
      v-model="selec"
      class="block appearance-none w-full bg-gray-100 border border-gray-200 hover:border-gray-300 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      @click="eventTest(selec)"
    >
      <option v-if="!options.length" disabled selected>Not found</option>
      <option v-for="op in props.options" :key="op.name" class="text-gray-700">
        {{ op.name }}
      </option>
    </select>

    <div
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
    >
      <svg
        class="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
  import { watchEffect } from '@vue/runtime-core'
  import { ref } from 'vue'

  const emit = defineEmits(['teste'])

  const selec = ref('')

  const props = defineProps({
    options: {
      type: Array,
    },
  })

  function eventTest(teste) {
    console.log('teste')
    emit('teste', teste)
  }

  watchEffect(() => {
    console.log(props.options)
  })
</script>

<style lang="postcss" scoped></style>
