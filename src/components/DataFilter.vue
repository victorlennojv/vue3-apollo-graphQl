<template>
  <div class="center-flex">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xs text-gray-400 mb-2">
          Filtrar dados de países
        </div>
        <!-- Seletor Continentes -->
        <app-select class="m-3" :options="continents" />
        <app-select class="m-3" :options="continents" />
        <div class="m-2">
          <button
            class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full active:bg-blue-600"
            @click="fetchCountries"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, ref, watchEffect } from 'vue'
  import gql from 'graphql-tag'
  import { useQuery } from '@vue/apollo-composable'
  import AppSelect from './ui/AppSelect.vue'

  const items = ref([])

  let continents = ref([])
  const ALL_CONTINENTS_QUERY = gql`
    query {
      continents {
        name
      }
    }
  `

  const { result } = useQuery(ALL_CONTINENTS_QUERY)
  continents = computed(() => result.value?.continents ?? [])

  watchEffect(() => {
    console.log(continents)
  })
</script>

<style lang="postcss">
  .center-flex {
    @apply flex items-center justify-center;
  }
</style>
