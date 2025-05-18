<script setup lang="ts">
import { ref, computed } from "vue";
import { useModal } from "@/stores/modal";
import { useAuthStore } from '@/stores/auth';

const modal = useModal();
const authStore = useAuthStore();

const name = ref("");
const email = ref("");
const userName = ref("")
const password = ref("");

const confirmPassword = ref("");
const brugernavn = ref("");

const showPassword = ref(false);
const showConfirmPassword = ref(false);


const isLengthValid = computed(
  () => password.value.length >= 8 && password.value.length <= 25
);
const hasLowercase = computed(() => /[a-z]/.test(password.value));
const hasUppercase = computed(() => /[A-Z]/.test(password.value));
const hasNumberOrSymbol = computed(() => /[\d\W]/.test(password.value));

async function handleSubmit() {
  !confirmPassword.value

  if (!name.value || !email.value || !userName.value || !password.value ) {
    alert("Udfyld venligst alle felter.");
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert("Adgangskoderne matcher ikke.");
    return;
  }

  modal.setForm("loading");

  const result = await authStore.signup(name.value, email.value, userName.value, password.value);

  if (result.success) {
    modal.setForm("success");
    setTimeout(() => {
      modal.close();
    }, 3000);
  } else {
    alert(result.error || "Noget gik galt. Prøv igen.");
    modal.setForm("create"); 
  }
}
</script>

<template>
  <div
    v-if="modal.activeForm === 'create'"
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-2"
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

    <h2 class="text-xl font-semibold mb-6">Opret konto</h2>

    <form @submit.prevent="handleSubmit" class="space-y-4">

      <div>
  <label for="name" class="block text-sm font-medium mb-1">Navn</label>
  <input
    id="name"
    v-model="name"
    type="text"
    class="w-full px-4 py-2 rounded border border-gray-300 bg-transparent text-white placeholder-gray-400"
    placeholder="Indtast dit navn"
  />
</div>


      <div>
        <label for="email" class="block text-sm font-medium mb-1"
          >Mailadresse</label
        >
        <input
          id="email"
          v-model="email"
          type="email"
          class="w-full px-4 py-2 rounded border border-gray-300 bg-transparent text-white placeholder-gray-400"
          placeholder="Indtast din mail"
        />
      </div>

      <div>

       <label for="userName" class="block text-sm font-medium mb-1">Brugernavn</label>
        <input
        id="userName"
       v-model="userName"
       type="text"
       class="w-full px-4 py-2 rounded border border-gray-300 bg-transparent text-white placeholder-gray-400"
       placeholder="Vælg et brugernavn"
      />
        </div>
        
      <div class="relative">
        <label for="password" class="block text-sm font-medium mb-1">Adgangskode</label>
        <input
          id="password"
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          class="w-full px-4 py-2 rounded border border-gray-300 bg-transparent text-white placeholder-gray-400 pr-10"
          placeholder="Vælg en adgangskode"
        />
        <button
          type="button"
          class="absolute right-3 transform translate-y-1/2 text-white"
          @click="showPassword = !showPassword"
        >
          <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.269-2.943-9.543-7a9.956 9.956 0 012.157-3.513m1.658-1.63M3 3l18 18" />
          </svg>
        </button>
      </div>


      <div class="relative">
        <label for="confirmPassword" class="block text-sm font-medium mb-1">Bekræft adgangskode</label>

        <input
          id="confirmPassword"
          v-model="confirmPassword"
          :type="showConfirmPassword ? 'text' : 'password'"
          class="w-full px-4 py-2 rounded border border-gray-300 bg-transparent text-white placeholder-gray-400 pr-10"
          placeholder="Bekræft adgangskode"
        />
        <button
          type="button"
          class="absolute right-3 transform translate-y-1/2 text-white"
          @click="showConfirmPassword = !showConfirmPassword"
        >
          <svg v-if="!showConfirmPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.269-2.943-9.543-7a9.956 9.956 0 012.157-3.513m1.658-1.63M3 3l18 18" />
          </svg>
        </button>
      </div>



      <div class="mt-6 text-white text-sm space-y-2">
        <ul class="list-disc pl-5">
          <li :class="isLengthValid ? 'text-green-400' : 'text-white'">
            8-25 tegn
          </li>
          <li :class="hasLowercase ? 'text-green-400' : 'text-white'">
            Små bogstaver
          </li>
          <li :class="hasUppercase ? 'text-green-400' : 'text-white'">
            Store bogstaver
          </li>
          <li :class="hasNumberOrSymbol ? 'text-green-400' : 'text-white'">
            Tal eller tegn
          </li>
        </ul>
      </div>

      <button
        v-if="hasLowercase && hasUppercase && hasNumberOrSymbol && isLengthValid"
        type="submit"
        class="block mx-auto min-w-32 bg-[var(--color-secondary)] text-black font-semibold py-2 rounded hover:opacity-90 transition"
      >
        Opret konto
      </button>

  
    </form>
    </div>
  </div>
</template>
