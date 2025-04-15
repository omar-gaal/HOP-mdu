<!-- 	Optimeret Nuxt-img komponent -->


<script setup lang="ts">
defineProps<{
  src: string;
  alt?: string;
  width?: number ;
  height?: number ;
  className?: string;
}>();
</script>

<template>
  <img
    :src="src"
    :alt="alt || ''"
    :width="width"
    :height="height"
    :class="class"
    loading="lazy"
  />
</template>
