<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    fullWidth?: boolean;
  }>(),
  {
    fullWidth: true,
  }
);
</script>
<!-- max-w-6xl  mx-auto px-2  -->
<template>
  <div :class="[props.fullWidth ? 'max-w-6xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 ' : '']">
    <slot />  
  </div>
</template>
<!-- max-w-screen-2xl  -->