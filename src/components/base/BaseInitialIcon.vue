<script setup lang="ts">
defineProps<{
  initials?: string;
}>();
</script>



<template>
    <div class="bg-white w-12 h-12 rounded-full flex items-center justify-center text-black font-bold uppercase">
       
      <span class="text-black">{{ initials }}</span>
    </div>
  </template>