<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute();
const slug = route.params.slug;

const { data } = await useAsyncData('page-data-' + slug, () => queryContent('codelist').where({CodeListNumber: {$eq: parseInt(slug)}}).findOne())
</script>
<template>
  <main>
    <div class="container mx-auto">
      <ContentRenderer  :value="data" :required="true">
        <template v-if="data">
          <h1 class="text-4xl font-extrabold dark:text-white m-4">List {{ data.CodeListNumber }}: {{ data.CodeListDescription }}</h1>

          <div class="overflow-x-auto">
            <table class="table-auto overflow-scroll w-full text-left rtl:text-right">
              <thead class="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th scope="col" class="px-6 py-3">Value</th>
                <th scope="col" class="px-6 py-3">Description</th>
                <th scope="col" class="px-6 py-3">Notes</th>
                <th scope="col" class="px-6 py-3">Issue number</th>
                <th scope="col" class="px-6 py-3">Modified in Issue</th>
              </tr>
              </thead>
              <tbody>

              <tr v-for="code in data.Code" class="bg-white border-b dark:bg-opacity-0 dark:border-gray-700">
                <td class="px-6 py-3">{{ code.CodeValue }}</td>
                <td class="px-6 py-3">{{ code.CodeDescription }}</td>
                <td class="px-6 py-3">{{ code.CodeNotes }}</td>
                <td class="px-6 py-3">{{ code.IssueNumber }}</td>
                <td class="px-6 py-3">{{ code.ModifiedNumber }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </template>
        <template v-else>

        </template>
      </ContentRenderer>
    </div>
  </main>
</template>
