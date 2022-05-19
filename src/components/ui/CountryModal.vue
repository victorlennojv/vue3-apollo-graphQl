<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    class="relative z-550"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0"
      >
        <div
          class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full"
        >
          <div
            v-if="props.country"
            class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
          >
            <div class="sm:flex sm:items-start justify-center">
              <div
                class="mx-auto flex items-center justify-center h-12 w-12 ring-4 ring-emerald-100 rounded-full sm:mx-0 sm:h-10 sm:w-10"
              >
                {{ country.emoji }}
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-xl leading-6 font-medium text-gray-900">
                  {{ country.name }}
                </h3>
                <h3 class="text-sm leading-6 font-medium text-gray-500">
                  {{ country.capital || '-' }}
                </h3>
              </div>
            </div>
            <div class="flex">
              <h5 class="mx-1">
                Country Phone Code:
                <span class="text-gray-500">{{ country.phone }}</span>
              </h5>
              <h5 class="mx-1">
                Continent:
                <span class="text-gray-500">{{ country.continent.name }}</span>
              </h5>
              <h5 class="mx-1">
                Currency:
                <span class="text-gray-500">{{ country.currency }}</span>
              </h5>
              <h5 class="mx-1">
                Languages:
                <span
                  v-for="language in country.languages"
                  :key="language.code"
                  class="text-gray-500"
                  >{{ language.name }} <br
                /></span>
              </h5>
            </div>
          </div>

          <div v-else class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div
                class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
              >
                <svg
                  class="h-6 w-6 text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>

              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  id="modal-title"
                  class="text-xl text-center leading-6 font-medium text-gray-900"
                >
                  Error while processing country data, please try again.
                </h3>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              @click="emit('toggle:modal')"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const emit = defineEmits(['toggle:modal'])
  const props = defineProps({
    country: {
      type: Object,
      default: () => {},
    },
  })
</script>

<style lang="postcss" scoped></style>
