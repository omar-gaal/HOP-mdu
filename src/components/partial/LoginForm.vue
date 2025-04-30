<script setup lang="ts">
import { ref } from 'vue';
import { useModal } from "@/stores/modal";
import { useAuthStore } from '@/stores/auth';

const modal = useModal();
const authStore = useAuthStore();


const userName = ref('')
const password = ref('');

async function handleLogin() {
  const success = await authStore.login(userName.value, password.value);
  console.log("login attempt result:", success)
  if (success) {
    console.log("Login successful, user data:", authStore.user);
    modal.close();
  } else {
    console.warn(" Login failed");
    alert('Fejl ved login. Prøv igen.');
  }
}
</script>

<template>
  <transition name="fade">
    <div v-if="modal.activeForm === 'login'">
      <div class="bg-[var(--color-primary)] rounded-lg shadow-lg px-8 py-6 w-full max-w-screen-md text-white relative">
        <button
          class="absolute top-4 right-5 text-[var(--color-secondary)] text-xl font-bold hover:scale-110 transition-transform"
          @click="modal.close"
        >
          ✕
        </button>

        <h2 class="text-xl font-semibold mb-6">Log ind</h2>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium mb-1">Brugernavn</label>
            <input
              v-model="userName"
              id="userName"
              type="text"
              class="w-full px-4 py-2 rounded border border-gray-300 bg-transparent text-white placeholder-gray-400"
              placeholder="Indtast din mail"
            />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium mb-1">Adgangskode</label>
            <input
              v-model="password"
              id="password"
              type="text"
              class="w-full px-4 py-2 rounded border border-gray-300 bg-transparent text-white placeholder-gray-400"
              placeholder="Indtast adgangskode"
            />
          </div>
          <div class="flex items-center space-x-2">
            <input id="remember" type="checkbox" class="accent-[var(--color-secondary)]" />
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
            Opret login til ny <br /> eller eksisterende konto
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
