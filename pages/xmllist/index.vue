<script setup lang="ts">
import { Icon } from '@iconify/vue'

const {data} = await useAsyncData('page-data-xml', () => queryContent('xmllist').findOne())
console.log(data)
</script>

<template>
  <main>
    <div class="container mx-auto">
      <ContentRenderer :value="data">
        <h1 class="text-4xl font-extrabold dark:text-white m-4">Onix XMLlists</h1>

        <div class="overflow-x-auto">
          <table class="table-auto overflow-scroll w-full text-left rtl:text-right">
            <thead class="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th scope="col" class="px-6 py-3">#</th>
              <th scope="col" class="px-6 py-3">ReferenceName</th>
              <th scope="col" class="px-6 py-3">shortTag</th>
              <th scope="col" class="px-6 py-3">Cardinality</th>
              <th scope="col" class="px-6 py-3">Code values</th>
            </tr>
            </thead>
            <tbody>
            <tr  class="bg-white border-b dark:bg-opacity-0 dark:border-gray-700">
              <td class="px-6 py-3">onixmessage</td>
              <td class="px-6 py-3">&lt;ONIXMessage&gt;</td>
              <td class="px-6 py-3">&lt;ONIXMessage&gt;</td>
              <td class="px-6 py-3">1</td>
              <td class="px-6 py-3"></td>
            </tr>

            <tr v-for="tag in data.XMLCodeTable.XMLList" class="bg-white border-b dark:bg-opacity-0 dark:border-gray-700">
              <td class="px-6 py-3">{{ tag.Reference }}</td>
              <td class="px-6 py-3">{{ tag.ReferenceName }}</td>
              <td class="px-6 py-3">{{ tag.ShortTag }}</td>
              <td class="px-6 py-3">{{ tag.Cardinality }}</td>
              <td class="px-6 py-3">
                <NuxtLink :href="`/xmllist/${tag.Reference}/`">
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
