<script setup>
  import AppLogo from './components/ui/AppLogo.vue'
  import DataFilter from './components/DataFilter.vue'
  import CountriesList from './components/CountriesList.vue'

  import { useApolloClient } from '@vue/apollo-composable'
  import { ref } from 'vue'
  import { countriesByContinentQuery } from './queries/'

  const { client } = useApolloClient()

  const countries = ref([])

  const fetchCountriesByContinent = async (payload) => {
    try {
      const { data } = await client.query({
        query: countriesByContinentQuery('"' + payload + '"'),
      })
      countries.value = data.continent.countries
    } catch (error) {
      console.log(error)
    }
  }
</script>

<template>
  <div class="center-flex mb-10 bg-white shadow-sm">
    <AppLogo />
  </div>
  <div class="center-flex mb-10">
    <DataFilter @filter:submit="fetchCountriesByContinent" />
  </div>
  <div class="center-flex mb-10">
    <CountriesList :countries="countries" />
  </div>
</template>

<style lang="postcss">
  .center-flex {
    @apply flex items-center justify-center;
  }
  body {
    font-family: 'RobotoRegular', sans-serif;
    background-color: #f0f0f0;
  }
  .fade-enter-active {
    transition: all 0.4s;
  }
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
