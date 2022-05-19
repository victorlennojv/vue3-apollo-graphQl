<template>
  <!-- component -->
  <div class="flex justify-center mx-16">
    <table
      class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5"
    >
      <thead class="text-white">
        <tr
          class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
        >
          <th class="p-3 text-left">Name</th>
          <th class="p-3 text-left">Email</th>
          <th class="p-3 text-left" width="110px">Actions</th>
        </tr>
        <tr
          class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
        >
          <th class="p-3 text-left">Name</th>
          <th class="p-3 text-left">Email</th>
          <th class="p-3 text-left" width="110px">Actions</th>
        </tr>
        <tr
          class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
        >
          <th class="p-3 text-left">Name</th>
          <th class="p-3 text-left">Email</th>
          <th class="p-3 text-left" width="110px">Actions</th>
        </tr>
        <tr
          class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
        >
          <th class="p-3 text-left">Name</th>
          <th class="p-3 text-left">Email</th>
          <th class="p-3 text-left" width="110px">Actions</th>
        </tr>
      </thead>
      <tbody class="flex-1 sm:flex-none">
        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
          <td class="border-grey-light border hover:bg-gray-100 p-3">
            John Covv
          </td>
          <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
            contato@johncovv.com
          </td>
          <td
            class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"
          >
            Delete
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup></script>

<style lang="postcss" scoped>
  html,
  body {
    height: 100%;
  }

  @media (min-width: 640px) {
    table {
      display: inline-table !important;
    }

    thead tr:not(:first-child) {
      display: none;
    }
  }

  td:not(:last-child) {
    border-bottom: 0;
  }

  th:not(:last-child) {
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  }
</style>
