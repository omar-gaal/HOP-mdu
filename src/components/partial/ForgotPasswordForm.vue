<script setup lang="ts">
import { useModal } from "@/stores/modal";
import { ref } from 'vue';
const modal = useModal();

const email = ref('');
const isSubmitted = ref(false);

const handleSubmit = (e: Event) => {
  e.preventDefault();
  if (email.value) {
    // Her kan du indsætte API-kaldet hvis nødvendigt
    isSubmitted.value = true;
  }
};
</script>

<template>
  <div
    v-if="modal.activeForm === 'forgot'"
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    @click.self="modal.close"
  >
    <div
      class="bg-[var(--color-primary)] rounded-lg shadow-lg px-8 py-6 w-full max-w-screen-md text-white relative"
    >
      <button
        class="absolute top-4 right-5 text-[var(--color-secondary)] text-xl font-bold hover:scale-110 transition-transform"
        @click="modal.close"
      >
        ✕
      </button>

      <h2 class="text-xl font-semibold mb-6">Glemt adgangskode</h2>

      <form class="space-y-4" @submit="handleSubmit">
        <div>
          <label for="email" class="block text-sm font-medium mb-1">
            Indtast din e-mail
          </label>
          <input
            id="email"
            type="email"
            v-model="email"
            class="w-full px-4 py-2 rounded border border-gray-300 bg-transparent text-white placeholder-gray-400"
            placeholder="Din mailadresse"
            required
          />
        </div>

        <button
          type="submit"
          class="block mx-auto min-w-32 bg-[var(--color-secondary)] text-black font-semibold py-2 rounded hover:opacity-90 transition"
        >
          Send 
        </button>
        <p v-if="isSubmitted" class="text-green-300 text-center pt-4">
          Hvis du har en registreret konto, sender vi et link til nulstilling af din adgangskode.
        </p>
      </form>
    </div>
  </div>
</template>