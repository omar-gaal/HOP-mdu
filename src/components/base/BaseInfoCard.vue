<script setup lang="ts">


defineProps<{
  title?: string;
  userName?: string;
  email?: string;
  adresse?: string;
  postNr?: string; 
  by?: string;
  land?: string;
  linkText?: string;
  linkUrl?: string;
}>();
</script>

<template>
  <div class="border-2 border-solid p-5 border-[#6B7280] h-80 w-96 flex flex-col justify-between">
    <div>
      <h1 class="pb-9 text-primary text-3xl font-bold">{{ title }}</h1>
      
      <div class="text-xl flex flex-col gap-2">
        <p >{{ userName || adresse }}</p>
      </div>
      
      <div class="text-xl flex flex-col gap-2">
        <p >{{ email || postNr  }} <span>{{ by }}</span></p>
      </div>

      <div class="text-xl flex flex-col gap-2">
        <p >{{ land }}</p>
      </div>
    </div>

    <NuxtLink class="underline" v-if="linkUrl" :href="linkUrl"> {{ linkText }}</NuxtLink>
  </div>
</template> 
