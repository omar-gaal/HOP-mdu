<script setup lang="ts">


defineProps<{
  title?: string;
  userName?: string;
  email?: string;
  linkText?: string;
  linkUrl?: string;
}>();
</script>

<template>
  <div class="border-2 border-solid p-5 border-[#6B7280] h-80 w-96 flex flex-col justify-between">
    <div>
      <h1 class="pb-9 text-primary text-3xl font-bold">{{ title }}</h1>
      <div class="text-xl flex flex-col gap-2">
        <p >{{ userName }}</p>
      </div>
      <div class="text-xl flex flex-col gap-2">
        <p >{{ email }}</p>
      </div>
    </div>
    <a :href="linkUrl" class="underline">{{ linkText }}</a>
  </div>
</template> 
