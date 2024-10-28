<script setup lang="ts">
import {Icon} from "@iconify/vue";

useHead({
  meta: [
    { name: 'google-site-verification', content: 'LB04BPg6ogl1ZtrCxBfDQUEmhYBCV1-ovWSpoY6P-pc' }
  ],
})
</script>

<template>
  <main>
    <div class="container">
      <div class="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 page-header page-header pb-8">
        <h1 class="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">ONIX for Books codelists</h1>

        <div class="max-w-[750px] text-center text-lg font-light text-foreground">
          ONIX for Books is a standard format for representing and sharing book information in the publishing industry.
          It is widely used for data exchanges between publishers, distributors, retailers, and other stakeholders.
          Codelists are an essential part of the ONIX standard, providing standardized values for specific data elements to ensure consistency in how data is communicated.
        </div>

        <div class="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
          <NuxtLink to="/codelist/" class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 rounded-[6px]">
            Go to list
          </NuxtLink>

          <NuxtLink to="https://github.com/GhostMonkeyFPS/onix-codelist" target="_blank" class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-[6px]">
            <Icon icon="mdi:github" class="mr-2 h-4 w-4" width="1.2em" height="1.2em" />
            Github
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>
