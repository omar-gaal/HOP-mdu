<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    isFrontpage?: boolean;
    isMypage?: boolean;
  }>(),
  {
    isFrontpage: false, // default both false
    isMypage: false,
  }
);
</script>

<template>
  <div
    :class="[
      isFrontpage
        ? 'max-w-6xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8'
        : isMypage
        ? 'max-w-5xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8'
        : '' // fallback if none true
    ]"
  >
    <slot />
  </div>
</template>
