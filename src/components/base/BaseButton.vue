<!-- src/components/base/BaseButton.vue -->
<script setup lang="ts">
defineProps<{
  label: string;
  url: string;
  external?: boolean;
  icon?: boolean;
  type?: 'button' | 'submit' | 'reset';
  iconSize?: string;
}>();
</script>

<template>

  <component
  :is="url ? 'a' : 'button'"
  :href="url"
  :target="external ? '_blank' :'_self'"
  rel="noopener noreferrer"
  :type="!url ? type || 'button' : undefined"
  class="inline-flex items-center gap-2 px-6 py-3 text-primary font-semibold bg-secondary rounded transition hover:opacity-90"
  >
  {{ label }}
  <Icon 
  v-if="icon" 
  name="heroicons:chevron-right" 
  />
  </component>

</template>
