<script setup lang="ts">
import { useModal } from "@/stores/modal";

const modal = useModal();
</script>

<template>
  <button
    @click="modal.open('login')"
    class="bg-secondary text-primary font-semibold px-6 py-1.5 border border-primary hover:opacity-90 transition rounded-sm"
  >
    Login
  </button>
</template>