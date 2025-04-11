<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    fullWidth?: boolean;
  }>(),
  {
    fullWidth: false, // default is NOT full width
  }
);
</script>

<template>
  <header>
    <nav class="p-4 bg-gray-100">
      <NuxtLink to="/" class="mr-4">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>
  </header>

  <section :class="[props.fullWidth ? '' : 'max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12']">
    <slot />
  </section>
</template>
