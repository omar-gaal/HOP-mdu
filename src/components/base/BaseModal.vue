<!-- til login popup -->

<!-- components/base/BaseModal.vue -->
<script setup lang="ts">
import { TransitionGroup } from "vue";
import { useModal } from "~/stores/modal";

const modal = useModal();
</script>

<template>
  <TransitionGroup name="fade">
    <div
      v-if="modal.isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-0"
    >
      <div class="bg-primary rounded-lg shadow-lg p-o max-w-lg w-full relative">
        <slot />
      </div>
    </div>
  </TransitionGroup>
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
