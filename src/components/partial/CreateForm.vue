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
// const confirmPassword = ref("");

const isLengthValid = computed(
  () => password.value.length >= 8 && password.value.length <= 25
);
const hasLowercase = computed(() => /[a-z]/.test(password.value));
const hasUppercase = computed(() => /[A-Z]/.test(password.value));
const hasNumberOrSymbol = computed(() => /[\d\W]/.test(password.value));

async function handleSubmit() {
  // !confirmPassword.value
  if (!name.value || !email.value || !userName.value || !password.value ) {
    alert("Udfyld venligst alle felter.");
    return;
  }

  // if (password.value !== confirmPassword.value) {
  //   alert("Adgangskoderne matcher ikke.");
  //   return;
  // }

  modal.setForm("loading");

  const result = await authStore.signup(name.value, email.value, userName.value, password.value);

  if (result.success) {
    modal.setForm("success");
    setTimeout(() => {
      modal.close();
    }, 3000);
  } else {
    alert(result.error || "Noget gik galt. Prøv igen.");
    modal.setForm("create"); // Stay on create form if error
  }
}
</script>

<template>
  <div
    v-if="modal.activeForm === 'create'"
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
  <label for="name" class="block text-sm font-medium mb-1">Fulde Navn</label>
  <input
    id="name"
    v-model="name"
    type="text"
    class="w-full px-4 py-2 rounded border border-gray-300 bg-transparent text-white placeholder-gray-400"
    placeholder="Indtast dit fulde navn"
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

      <div>
        <label for="password" class="block text-sm font-medium mb-1"
          >Adgangskode</label
        >
        <input
          id="password"
          v-model="password"
          type="password"
          class="w-full px-4 py-2 rounded border border-gray-300 bg-transparent text-white placeholder-gray-400"
          placeholder="Vælg en adgangskode"
        />
      </div>
     <!--  
      <div>
        <label for="confirmPassword" class="block text-sm font-medium mb-1"
          >Bekræft adgangskode</label
        >
        <input
          id="confirmPassword"
          v-model="confirmPassword"
          type="password"
          class="w-full px-4 py-2 rounded border border-gray-300 bg-transparent text-white placeholder-gray-400"
          placeholder="Bekræft adgangskode"
        />
      </div>

      -->

      <div class="mt-6 text-white text-sm space-y-2">
        <ul class="list-disc pl-5">
          <li :class="isLengthValid ? 'text-green-400' : 'text-white'">
            ✔️ 8-25 tegn
          </li>
          <li :class="hasLowercase ? 'text-green-400' : 'text-white'">
            ✔️ Små bogstaver
          </li>
          <li :class="hasUppercase ? 'text-green-400' : 'text-white'">
            ✔️ Store bogstaver
          </li>
          <li :class="hasNumberOrSymbol ? 'text-green-400' : 'text-white'">
            ✔️ Tal eller tegn
          </li>
        </ul>
      </div>

      <button
        type="submit"
        class="block mx-auto min-w-32 bg-[var(--color-secondary)] text-black font-semibold py-2 rounded hover:opacity-90 transition"
      >
        Opret konto
      </button>
    </form>
  </div>
</template>
