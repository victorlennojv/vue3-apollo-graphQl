<script setup>
  import AppLogo from './components/ui/AppLogo.vue'
  import DataFilter from './components/DataFilter.vue'
  import CountriesList from './components/CountriesList.vue'
</script>

<template>
  <div class="center-flex mb-10 bg-white shadow-sm">
    <AppLogo />
  </div>
  <div class="center-flex mb-10">
    <DataFilter @filter:submit="'a'" />
  </div>
  <div class="center-flex mb-10">
    <CountriesList />
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
</style>
