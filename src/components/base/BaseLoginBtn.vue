<script setup lang="ts">
import { useModal } from "@/stores/modal";

const modal = useModal();
</script>

<template>
  <button
    @click="modal.open('login')"
    class="bg-secondary text-primary  px-[35px] py-0.5 text-[20px] border border-black rounded-lg"
  >
    Login
  </button>
</template>