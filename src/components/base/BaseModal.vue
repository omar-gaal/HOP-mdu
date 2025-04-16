<!-- til login popup -->

<!-- components/base/BaseModal.vue -->
<script setup lang="ts">
import { useModal } from '~/stores/modal'

const modal = useModal()
</script>

<template>
  <transition name="fade">
    <div
      v-if="modal.isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
        <button
          class="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
          @click="modal.close"
        >
          ✕
        </button>

      
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