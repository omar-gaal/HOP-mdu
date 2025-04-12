<!-- src/components/base/BaseButton.vue -->
<script setup lang="ts">
defineProps<{
  label: string;
  url: string;
  external?: boolean;
}>();
</script>

<template>
  <a
    :href="url"
    :target="external ? '_blank' : '_self'"
    rel="noopener noreferrer"
    class="inline-block px-6 py-3 text-white bg-orange-400 rounded hover:bg-orange-500 transition font-medium"
  >
    {{ label }}
  </a>
</template>
