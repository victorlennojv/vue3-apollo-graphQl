<template>
  <section class="bg-white dark:bg-gray-900 rounded-lg shadow">
    <app-toggle
      class="mt-5"
      label="Countries with 2+ languages"
      @change="setFilterToggleValue"
    />

    <div class="container px-12 py-6 mx-auto flex flex-col items-center">
      <h1
        class="text-3xl mb-6 font-semibold text-center text-gray-700 capitalize lg:text-4xl dark:text-white"
      >
        Countries List
      </h1>
      <div v-if="!countries.length">
        <h1 class="font-bold text-center text-gray-600 mt-12 mx-12">
          No country found, please try to filter again.
        </h1>
      </div>
      <div
        v-else-if="!toggleValue"
        class="grid grid-cols-2 flex gap-6 mt-2 xl:mt-16 md:grid-cols-4 xl:grid-cols-5"
      >
        <div
          v-for="country in countries"
          :key="country.name"
          class="flex flex-col items-center justify-center p-1 transition-colors duration-200 transform cursor-pointer group hover:bg-emerald-400 rounded-xl"
          @click="fetchCountry(country.code)"
        >
          <div
            class="mx-auto text-3xl flex items-center justify-center h-12 w-12 ring-1 ring-gray-200 rounded-full sm:mx-0 sm:h-10 sm:w-10"
          >
            {{ country.emoji }}
          </div>

          <h1
            class="mt-2 text-1xl font-semibold text-center text-gray-700 capitalize dark:text-white group-hover:text-white"
          >
            {{ country.name }}
          </h1>
        </div>
      </div>
      <div
        v-else
        class="grid grid-cols-2 flex gap-6 mt-2 xl:mt-16 md:grid-cols-4 xl:grid-cols-5"
      >
        <div
          v-for="country in filteredCountriesByLanguage"
          :key="country.name"
          class="flex flex-col items-center justify-center p-1 transition-colors duration-200 transform cursor-pointer group hover:bg-emerald-400 rounded-xl"
          @click="fetchCountry(country.code)"
        >
          <div
            class="mx-auto text-3xl flex items-center justify-center h-12 w-12 ring-1 ring-gray-200 rounded-full sm:mx-0 sm:h-10 sm:w-10"
          >
            {{ country.emoji }}
          </div>

          <h1
            class="mt-2 text-1xl font-semibold text-center text-gray-700 capitalize dark:text-white group-hover:text-white"
          >
            {{ country.name }}
          </h1>
        </div>
      </div>
    </div>
  </section>
  <div>
    <transition name="fade">
      <CountryModal
        v-if="showModal"
        :country="selectedCountry"
        @toggle:modal="toggleModal"
      />
    </transition>
  </div>
</template>

<script setup>
  import CountryModal from './CountryModal.vue'
  import { ref, watch } from 'vue'
  import { useApolloClient } from '@vue/apollo-composable'
  import { countryQuery } from '../queries'
  import AppToggle from './ui/AppToggle.vue'

  const props = defineProps({
    countries: {
      type: Array,
      default: () => [],
    },
  })

  const { client } = useApolloClient()

  const showModal = ref(false)
  const selectedCountry = ref({})
  const filteredCountriesByLanguage = ref([])
  const toggleValue = ref(false)

  const toggleModal = () => {
    showModal.value = !showModal.value
  }

  const setFilterToggleValue = () => {
    toggleValue.value = !toggleValue.value
  }

  const fetchCountry = async (payload) => {
    try {
      const { data } = await client.query({
        query: countryQuery('"' + payload + '"'),
      })
      selectedCountry.value = data.country
      toggleModal()
    } catch (error) {
      console.log(error)
    }
  }

  watch(
    () => props.countries,
    () => {
      filteredCountriesByLanguage.value = props.countries.filter(
        (country) => country.languages.length > 1
      )
    }
  )
</script>

<style lang="postcss" scoped></style>
