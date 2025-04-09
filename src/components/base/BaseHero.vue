<!-- Hero (med title, image, CTA) -->
<script setup lang="ts">
defineProps<{
  heading: string;
  subheading: string;
}>();
</script>

<template>
  <section class="py-12 text-center">
    <h1 class="text-4xl font-bold mb-4">{{ heading }}</h1>
    <p class="text-xl text-gray-600">{{ subheading }}</p>
  </section>
</template>