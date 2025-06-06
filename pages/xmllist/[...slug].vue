<script setup lang="ts">
import { useRoute } from 'vue-router'
import {Icon} from "@iconify/vue";

const route = useRoute();
const slug = route.params.slug;

const { data } = await useAsyncData('page-data-' + slug, () => queryContent('xmllist').where({XMListName: {$eq: String(slug).replace(',', '')}}).findOne())
console.log(data)
</script>
<template>
  <main>
    <div class="container mx-auto">
      <ContentRenderer :value="data" :required="true">
        <template v-if="data">
          <h1 class="text-4xl font-extrabold dark:text-white m-4">{{ data.Label }}</h1>

          <div class="container">
            <span class="block max-w-[750px] mb-5" v-html="data.Description"></span>

            <div class="overflow-x-auto">
              <table class="table-auto overflow-scroll w-full text-left rtl:text-right">
                <tbody>
                <template v-if="data.Format">
                  <tr class="bg-white border-b border-t dark:bg-opacity-0 dark:border-gray-700">
                    <th scope="col" class="px-6 py-3">Format</th>
                    <td class="px-6 py-3"><span v-html="data.Format"></span></td>
                  </tr>
                </template>
                <template v-if="data.CodeListNumber">
                  <tr class="bg-white border-b border-t dark:bg-opacity-0 dark:border-gray-700">
                    <th scope="col" class="px-6 py-3">Onix CodeList</th>
                    <td class="px-6 py-3"><NuxtLink class="text-sky-600 no-underline hover:underline dark:text-sky-400" :href="`/codelist/${data.CodeListNumber}`">List {{ data.CodeListNumber }}</NuxtLink></td>
                  </tr>
                </template>
                <template v-if="data.ReferenceName">
                  <tr class="bg-white border-b dark:bg-opacity-0 dark:border-gray-700">
                    <th scope="col" class="px-6 py-3">ReferenceName</th>
                    <td class="px-6 py-3">{{ data.ReferenceName }}</td>
                  </tr>
                </template>
                <template v-if="data.ShortTag">
                  <tr class="bg-white border-b dark:bg-opacity-0 dark:border-gray-700">
                    <th scope="col" class="px-6 py-3">ShortTag</th>
                    <td class="px-6 py-3">{{ data.ShortTag }}</td>
                  </tr>
                </template>
                <template v-if="data.Cardinality">
                  <tr class="bg-white border-b dark:bg-opacity-0 dark:border-gray-700">
                    <th scope="col" class="px-6 py-3">Cardinality</th>
                    <td class="px-6 py-3">{{ data.Cardinality }}</td>
                  </tr>
                </template>
                <template v-if="data.Example">
                  <tr class="bg-white border-b dark:bg-opacity-0 dark:border-gray-700">
                    <th scope="col" class="px-6 py-3">Example</th>
                    <td class="px-6 py-3"><span v-html="data.Example"></span></td>
                  </tr>
                </template>
                </tbody>
              </table>
            </div>
          </div>
        </template>
        <template v-else>
        </template>
      </ContentRenderer>
    </div>
  </main>
</template>
