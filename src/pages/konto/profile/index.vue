<script setup lang="ts">
definePageMeta({
  middleware: "protected",
});

// Imports
import { useUsername } from "#imports";

import { useProfileStore } from "@/stores/useProfileStore";

import { useRouter } from 'vue-router';


// Stores
const userName = useUsername();
const profileStore = useProfileStore();

// State: Profile Info Saving
const profileIsSaving = ref(false);
const profileSaveMessage = ref("");

// State: Password Update
const currentPassword = ref("");
const newPassword = ref("");
const isLoading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

// State: Delete Popup
const showDeletePopup = ref(false);


// Load profile from localStorage on mount
onMounted(() => {
  profileStore.loadFromLocalStorage();
});

// Save profile to localStorage with confirmation
const saveProfile = () => {
  profileIsSaving.value = true;
  profileSaveMessage.value = "";

  profileStore.saveToLocalStorage();

const router = useRouter();


  setTimeout(() => {
    profileIsSaving.value = false;
    profileSaveMessage.value = "Dine ændringer er gemt!";
    setTimeout(() => {
      profileSaveMessage.value = "";
    }, 3000);
  }, 1000);
};

// Update password via API
const updatePassword = async () => {
  isLoading.value = true;
  successMessage.value = "";
  errorMessage.value = "";

  const authToken = useCookie("auth");

  try {
    await $fetch("https://app-cshf-umbraco.azurewebsites.net/api/member-profile/password", {
      method: "PATCH",
      body: {
        currentPassword: currentPassword.value,
        newPassword: newPassword.value,
      },
      headers: {
        Authorization: `Bearer ${authToken.value}`,
      },
    });

    successMessage.value = "Adgangskoden er opdateret!";
    currentPassword.value = "";
    newPassword.value = "";
  } catch (error: any) {
    errorMessage.value = error?.data?.message || error?.message || "Noget gik galt...";
    console.error("Fejl under opdatering af adgangskode:", error);
  } finally {
    isLoading.value = false;
  }
};


const deleteProfile = async () => {
  try {
    await $fetch('https://app-cshf-umbraco.azurewebsites.net/api/member-profile', {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${useCookie('auth').value}`,
      },
    });

    alert('Din konto er nu slettet');
    router.push('/');
  } catch (error) {
    console.error('Fejl ved sletning af profil:', error);
    alert('Noget gik galt. Prøv igen senere.');
  }
};

</script>


<template>
  <BaseContainer :is-mypage="true">
    <div class="flex justify-between py-8">
      <h2 class="text-2xl">Hej {{ userName || "Bruger" }}</h2>
      <h2 class="underline text-2xl">Log ud</h2>
    </div>

    <PartialAccountNavigation />

    <section class="space-y-10 mt-10 mb-20">
      <!-- Profiloplysninger -->
      <div class="bg-primary text-white p-6 rounded-md">
        <h3 class="text-xl font-bold mb-4">Profildetaljer</h3>
        <div class="space-y-2">
          <label class="block text-sm">Navn</label>
          <input
            type="text"
            v-model="profileStore.name"
            class="w-full bg-transparent border-b border-white outline-none"
          />

          <label class="block text-sm mt-4">Brugernavn</label>
          <input
            type="text"
            v-model="profileStore.username"
            class="w-full bg-transparent border-b border-white outline-none"
          />

          <label class="block text-sm mt-4">Email</label>
          <input
            type="email"
            v-model="profileStore.email"
            class="w-full bg-transparent border-b border-white outline-none"
          />
        </div>
        <button
          @click="saveProfile"
          class="bg-secondary text-primary px-4 py-2 rounded mt-6"
        >
          Gem ændringer
        </button>
      </div>

      <!-- Adresseoplysninger -->
      <div class="bg-primary text-white p-6 rounded-md">
        <h3 class="text-xl font-bold mb-4">Min adresse</h3>
        <div class="space-y-2">
          <label class="block text-sm">Adresse</label>
          <input
            type="text"
            v-model="profileStore.adresse"
            class="w-full bg-transparent border-b border-white outline-none"
          />

          <div class="flex gap-4 mt-4">
            <div class="w-1/2">
              <label class="block text-sm">Postnummer</label>
              <input
                type="text"
                v-model="profileStore.postNr"
                class="w-full bg-transparent border-b border-white outline-none"
              />
            </div>
            <div class="w-1/2">
              <label class="block text-sm">By</label>
              <input
                type="text"
                v-model="profileStore.by"
                class="w-full bg-transparent border-b border-white outline-none"
              />
            </div>
          </div>

          <label class="block text-sm mt-4">Land</label>
          <input
            type="text"
            v-model="profileStore.land"
            class="w-full bg-transparent border-b border-white outline-none"
          />
        </div>
        <button
  @click="saveProfile"
  :disabled="profileIsSaving"
  class="bg-secondary text-primary px-4 py-2 rounded mt-6"
>
  {{ profileIsSaving ? "Gemmer..." : "Gem ændringer" }}
</button>
<p class="text-green-400 mt-2" v-if="profileSaveMessage">{{ profileSaveMessage }}</p>
      </div>

      <!-- Ændring af adgangskode -->
      <div class="bg-primary text-white p-6 rounded-md">
        <h3 class="text-xl font-bold mb-4">Ændrer Adgangskode</h3>
        <div class="space-y-2">
          <label class="block text-sm">Skriv Gamle kodeord</label>
          <input
            type="password"
            placeholder="Nuværende kodeord"
            v-model="currentPassword"
            class="w-full bg-transparent border-b border-white outline-none"
          />

          <label class="block text-sm mt-4">Nyt kodeord</label>
          <input
            type="password"
            placeholder="Nyt kodeord"
            v-model="newPassword"
            class="w-full bg-transparent border-b border-white outline-none"
          />
        </div>
        <button
          @click="updatePassword"
          :disabled="isLoading"
          class="bg-secondary text-primary px-4 py-2 rounded mt-6"
        >
          {{ isLoading ? "Gemmer..." : "Gem ændringer" }}
        </button>
        <p class="text-green-400 mt-2" v-if="successMessage">{{ successMessage }}</p>
        <p class="text-red-400 mt-2" v-if="errorMessage">{{ errorMessage }}</p>
      </div>

      <!-- Slet profil -->
      <div class="text-right">
        <button
          @click="showDeletePopup = true"
          class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Slet min profil
        </button>
      </div>
    </section>

    <!-- Popup modal -->
    <div v-if="showDeletePopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 class="text-xl font-bold mb-4">Bekræft sletning</h3>
        <p class="mb-6">Er du sikker på, at du vil slette din profil? Denne handling kan ikke fortrydes.</p>
        <div class="flex justify-end gap-4">

          <button
            @click="showDeletePopup = false"
            class="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Annuller
          </button>
          <button class="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700">
            Slet profil
          </button>

          <button @click="showDeletePopup = false" class="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Annuller</button>
          <button @click="deleteProfile" class="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700">Slet profil</button>

        </div>
      </div>
    </div>
  </BaseContainer>
</template>
