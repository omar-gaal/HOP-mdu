<script setup lang="ts">
import { useModal } from "@/stores/modal";

const modal = useModal();
</script>

<template>
  <transition name="fade" mode="out-in">
    <div v-if="modal.isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div class="bg-primary rounded-lg shadow-lg p-6 max-w-lg w-full relative">
        <slot />
      </div>
    </div>
  </transition>
</template>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>