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
          label="Filter by continent"
          :options="continents.value"
          @filter:selected="selectedContinet"
        />
        <app-select
          class="m-3"
          label="Filter by languages"
          @filter:selected="selectedContinet"
        />
        <app-button
          color="lime"
          class="text-center"
          text="Submit Filter"
          @button:submit="onSubmit"
        />
        <app-toggle label="Countries with 2+ languages" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue'
  import { useQuery } from '@vue/apollo-composable'
  import AppSelect from './ui/AppSelect.vue'
  import AppButton from './ui/AppButton.vue'
  import AppToggle from './ui/AppToggle.vue'
  import { continentsQuery } from '../queries/'

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
