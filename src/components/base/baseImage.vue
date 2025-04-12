<!-- 	Optimeret Nuxt-img komponent -->


<script setup lang="ts">
defineProps<{
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}>();
</script>

<template>
  <img
    :src="src"
    :alt="alt || ''"
    :width="width"
    :height="height"
    :class="className"
    loading="lazy"
  />
</template>
