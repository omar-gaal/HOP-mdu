<script setup lang="ts">
import { useModal } from "@/stores/modal";
import ForgotPasswordForm from "@/components/partial/ForgotPasswordForm.vue";
const modal = useModal();
</script>

<template>
  <div
    v-if="modal.activeForm === 'forgot'"
    class="bg-[var(--color-primary)] rounded-lg shadow-lg px-8 py-6 w-full max-w-screen-md text-white relative"
  >
    <button
      class="absolute top-4 right-5 text-[var(--color-secondary)] text-xl font-bold hover:scale-110 transition-transform"
      @click="modal.close"
    >
      ✕
    </button>

    <h2 class="text-xl font-semibold mb-6">Glemt adgangskode</h2>

    <form class="space-y-4">
      <div>
        <label for="email" class="block text-sm font-medium mb-1">
          Indtast din e-mail
        </label>
        <input
          id="email"
          type="email"
          class="w-full px-4 py-2 rounded border border-gray-300 bg-transparent text-white placeholder-gray-400"
          placeholder="Din mailadresse"
        />
      </div>

      <button
        type="submit"
        class="block mx-auto min-w-32 bg-[var(--color-secondary)] text-black font-semibold py-2 rounded hover:opacity-90 transition"
      >
        Send 
      </button>
    </form>
  </div>
</template>