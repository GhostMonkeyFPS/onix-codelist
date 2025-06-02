<script setup lang="ts">
import {DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTrigger} from "radix-vue";
import {Icon} from "@iconify/vue";
import Fuse from "fuse.js";

const query = ref<string>('');

const { data } = await useAsyncData('search-data', () => queryContent('codelist').find())

const fuse = new Fuse(data.value ?? [], {
  includeScore: true,
  keys: ['CodeListNumber', 'CodeListDescription']
})

const result = computed(() => {
  return fuse.search(toValue(query)).slice(0, 5);
})

const modelOpen = ref<boolean>(false)
watch(modelOpen, (open: boolean) => {
  if (open) {
    nextTick(() => document.getElementById("search").focus());
  }
})

</script>

<template>
  <DialogRoot v-model="modelOpen" @update:open="modelOpen = !modelOpen">
    <DialogTrigger onOpenChange="onOpenChange">
      <div class="relative w-full items-center">
        <Input type="text" placeholder="Search..." class="pl-10" data-dialog-target="modal" />

        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <Icon icon="radix-icons:magnifying-glass" class="size-6 text-muted-foreground"/>
        </span>
        <span class="absolute inset-y-0 flex items-center p-2 border-border bg-muted m-[0.6rem] right-0 font-thin text-xs invisible md:visible">
            ⌘ K
        </span>
      </div>
    </DialogTrigger>

    <DialogPortal>
      <DialogOverlay class="bg-blackA9  fixed inset-0 z-30"/>
      <DialogContent class="data-[state=open]:animate-contentShow fixed top-[25%] left-[50%] max-h-[85vh] min-h-[30vh] w-[90vw] max-w-[750px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-background p-[25px] border-2 border-border focus:outline-none z-[100]">
        <div class="relative w-full items-center">
          <Input id="search" type="text" placeholder="Search..." class="pl-10" v-model="query" autocomplete="off" autofocus />

          <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
              <Icon icon="radix-icons:magnifying-glass" class="size-6 text-muted-foreground"/>
          </span>
          <span class="absolute inset-y-0 flex items-center p-2 border-border bg-muted m-[0.6rem] right-0 font-thin text-xs invisible md:visible">
            esc
          </span>
        </div>

        <template v-if="result">
          <div class="overflow-x-auto">
            <table class="table-auto overflow-scroll w-full text-left rtl:text-right">
              <tbody>
              <tr v-for="rlist in result" class="bg-white border-b dark:bg-opacity-0 dark:border-gray-700">
                <td class="px-6 py-3">
                  <NuxtLink :href="`/codelist/${rlist.item.CodeListNumber}/`">
                    List: {{  rlist.item.CodeListNumber }} {{ rlist.item.CodeListDescription }}
                  </NuxtLink>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </template>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
