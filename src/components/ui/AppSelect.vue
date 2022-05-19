<template>
  <div class="inline-block relative w-64">
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      for="grid-state"
    >
      {{ label }}
    </label>
    <select
      v-if="options.length"
      v-model="selected"
      class="block appearance-none disabled:bg-gray-300 w-full bg-gray-100 border border-gray-200 px-4 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline"
      @change="emitSelectedObject(selected)"
    >
      <option
        v-for="option in props.options"
        :key="option.code"
        :value="option"
        class="rounded text-gray-700"
      >
        {{ option.name }}
      </option>
    </select>
    <select
      v-else
      disabled
      class="block appearance-none disabled:bg-gray-300 w-full bg-gray-100 border border-gray-200 px-4 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline"
    >
      <option selected>Nothing found</option>
    </select>

    <div
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
    >
      <svg
        class="fill-current mt-4 h-4 w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -2 13 15"
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

  const emit = defineEmits(['filter:selected'])

  const props = defineProps({
    options: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: 'Select',
    },
  })

  const selected = ref({})

  function emitSelectedObject(payload) {
    emit('filter:selected', payload)
  }

  // watchEffect(() => {
  //   console.log(props.options)
  // })
</script>

<style lang="postcss" scoped></style>
