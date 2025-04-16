<script setup lang="ts">


const modal = useModal()

</script>

<template>
  <button
  @click = "modal.open"
    class="bg-secondary text-primary font-semibold px-6 py-1.5 border border-primary hover:opacity-90 transition rounded-sm"
  >
    Login
  </button>
</template>
