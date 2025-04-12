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

<template>
  <div :class="[props.fullWidth ? 'max-w-6xl  mx-auto px-2 ' : '']">
    <slot />
  </div>
</template>
