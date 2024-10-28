<script setup lang="ts">
import { Icon } from '@iconify/vue'

const {data} = await useAsyncData('page-data', () => queryContent('codelist').findOne())
</script>

<template>
  <main>
    <div class="container mx-auto">
      <ContentRenderer :value="data">
        <h1 class="text-4xl font-extrabold dark:text-white m-4">Onix codelists</h1>

        <div class="overflow-x-auto">
          <table class="table-auto overflow-scroll w-full text-left rtl:text-right">
            <thead class="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th scope="col" class="px-6 py-3">Number</th>
              <th scope="col" class="px-6 py-3">Description</th>
              <th scope="col" class="px-6 py-3">Issue number</th>
              <th scope="col" class="px-6 py-3">Code values</th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="list in data.ONIXCodeTable.CodeList"
                class="bg-white border-b dark:bg-opacity-0 dark:border-gray-700">
              <td class="px-6 py-3">{{ list.CodeListNumber }}</td>
              <td class="px-6 py-3">{{ list.CodeListDescription }}</td>
              <td class="px-6 py-3">{{ list.IssueNumber }}</td>
              <td class="px-6 py-3">
                <NuxtLink :href="`/codelist/${list.CodeListNumber}/`">
                  <Icon icon="ic:round-table-rows" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                </NuxtLink>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </ContentRenderer>
    </div>
  </main>
</template>

<style scoped>

</style>
