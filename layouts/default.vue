<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Search from "~/components/search/Search.vue";

const colorMode = useColorMode()

</script>

<template>

  <div class="flex min-h-screen flex-col bg-background">
    <header class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg border-b border-border">
      <div class="container flex h-14 max-w-screen-2xl items-center">
        <div class="mr-4 md:mr-1 flex">
          <NuxtLink href="/" class="mr-4 md:mr-2 lg:mr-6 flex items-center lg:space-x1 xl:space-x-2">
            <div class="w-[160px]">
              <h1>Onix codelist</h1>
            </div>
          </NuxtLink>

          <nav class="flex items-center max-lg:space-x-4 space-x-6 text-sm font-medium">
            <NuxtLink to="/" class="transition-colors hover:text-foreground/80 text-foreground/60">Home</NuxtLink>
            <NuxtLink to="/codelist/" class="transition-colors hover:text-foreground/80 text-foreground/60">OnixList</NuxtLink>
            <NuxtLink to="/xmllist/" class="transition-colors hover:text-foreground/80 text-foreground/60">XMLList</NuxtLink>
          </nav>
        </div>

        <div class="flex flex-1 justify-end me-2">
          <Search />
        </div>

        <div class="flex items-center justify-between space-x-2 md:justify-end">

          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline">
                <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span class="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem @click="colorMode.preference = 'light'">
                Light
              </DropdownMenuItem>
              <DropdownMenuItem @click="colorMode.preference = 'dark'">
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem @click="colorMode.preference = 'system'">
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>

    <div class="flex-1 bg-background">
      <slot />
    </div>

    <footer class="py-6 md:px-8 md:py-0">
      <div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div class="text-center text-sm leading-loose text-muted-foreground md:text-left">
          <div class="inline-block">
            Built and designed by <a href="https://github.com/GhostMonkeyFPS">GhostMonkeyFPS</a><span class="ml-0.5">.</span>
          </div>
        </div>
        <div class="text-center text-sm leading-loose text-muted-foreground items-center justify-between space-x-2 md:justify-end">
            {{ new Date().getFullYear() }}
        </div>
      </div>
    </footer>

  </div>

</template>
