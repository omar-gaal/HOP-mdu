<script setup lang="ts">
import { useModal } from "@/stores/modal";

const modal = useModal();
</script>

<template>
  <button
    @click="modal.open('login')"
    class="bg-secondary text-primary  px-[45px] py-3 text-[22px] border border-black rounded-lg"
  >
    Login
  </button>
</template>