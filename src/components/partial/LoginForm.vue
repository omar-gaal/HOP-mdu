<script setup lang="ts">
import { useModal } from "@/stores/modal";
import { ref } from "vue";
const modal = useModal();
const showPassword = ref(false);
</script>

<template>
  <transition name="fade">
    <div
      v-if="modal.activeForm === 'login'"
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

        <h2 class="text-xl font-semibold mb-6">Log ind</h2>

        <form class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium mb-1"
              >Brugernavn</label
            >
            <input
              id="email"
              type="email"
              class="w-full px-4 py-2 rounded border border-gray-300 bg-transparent text-white placeholder-gray-400"
              placeholder="Indtast brugernavn"
            />
          </div>
          <div class="relative">
            <label for="password" class="block text-sm font-medium mb-1"
              >Adgangskode</label
            >
            <input
              id="password"
              :type="showPassword ? 'text' : 'password'"
              class="w-full px-4 py-2 rounded border border-gray-300 bg-transparent text-white placeholder-gray-400 pr-10"
              placeholder="Indtast adgangskode"
            />
            <button
              type="button"
              class="absolute right-3 transform translate-y-1/2 text-white"
              @click="showPassword = !showPassword"
            >
              <svg
                v-if="!showPassword"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.269-2.943-9.543-7a9.956 9.956 0 012.157-3.513m1.658-1.63A9.953 9.953 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.043 5.091M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3l18 18"
                />
              </svg>
            </button>
          </div>
          <div class="flex items-center space-x-2">
            <input
              id="remember"
              type="checkbox"
              class="accent-[var(--color-secondary)]"
            />
            <label for="remember" class="text-sm">Husk mig</label>
          </div>
          <button
            type="submit"
            class="block mx-auto min-w-32 bg-[var(--color-secondary)] text-black font-semibold py-2 rounded hover:opacity-90 transition"
          >
            Log ind
          </button>
        </form>

        <div class="mt-6 flex justify-between text-sm">
          <a
            href="#"
            @click.prevent="modal.setForm('create')"
            class="underline text-white hover:text-[var(--color-secondary)]"
          >
            Opret login til ny <br />
            eller eksisterende konto
          </a>

          <a
            href="#"
            class="underline text-white hover:text-[var(--color-secondary)]"
            @click.prevent="modal.setForm('forgot')"
          >
            Glemt adgangskode?
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>
