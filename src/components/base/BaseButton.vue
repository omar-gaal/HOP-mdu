
<script setup lang="ts">
defineProps<{
  label: string;
  url: string;
}>();
</script>

<template>
<a
    :href="url"
    target="_blank"
    rel="noopener"
    class="inline-block px-6 py-3 text-white bg-red-600 rounded hover:bg-red-700 transition"
  >
    {{ label }}
  </a>

</template>
  