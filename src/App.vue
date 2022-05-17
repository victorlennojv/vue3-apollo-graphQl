<script setup>
  import AppLogo from './components/ui/AppLogo.vue'
  import DataFilter from './components/DataFilter.vue'
</script>

<template>
  <div class="center-flex m-4 mb-10">
    <AppLogo />
  </div>
  <DataFilter />
</template>

<style lang="postcss">
  .center-flex {
    @apply flex items-center justify-center;
  }
  body {
    font-family: 'RobotoRegular', sans-serif;
    background-color: #e4e4e4;
  }
</style>
