<template>
  <div class="center-flex">
    <div class="max-w-sm w-full rounded-lg bg-white overflow-hidden shadow-2xl">
      <div class="px-6 py-4">
        <div class="font-bold text-xs text-gray-400 mb-2">
          Filtrar dados de países
        </div>
        <!-- Continents selector -->
        <app-select
          class="m-3"
          :options="continents.value"
          @filter:selected="selectedContinet"
        />
        <div class="m-2">
          <button
            class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full active:bg-blue-600"
            @click="onSubmit"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, reactive, ref, watchEffect } from 'vue'
  import { useQuery } from '@vue/apollo-composable'
  import AppSelect from './ui/AppSelect.vue'
  import {
    continentsQuery,
    countriesByContinentQuery,
  } from '../queries/countries'

  const emit = defineEmits(['filter:submit'])

  const continentToFindCountries = ref({
    name: '',
    code: '',
  })

  const continents = ref([])

  const { result } = useQuery(continentsQuery())
  continents.value = computed(() => result.value?.continents ?? [])

  const selectedContinet = (payload) => {
    continentToFindCountries.value.name = payload.name
    continentToFindCountries.value.code = payload.code
  }

  const onSubmit = () => {
    emit('filter:submit', continentToFindCountries.value.code)
  }
  // watchEffect(() => {
  //   console.log(continents)
  // })
</script>

<style lang="postcss" scoped>
  .center-flex {
    @apply flex items-center justify-center w-96;
  }
</style>
