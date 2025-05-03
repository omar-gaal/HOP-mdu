<script setup lang="ts">
definePageMeta({
  middleware: "protected",
});

import { useUsername } from "#imports";

const userName = useUsername();
</script>

<template>
  <BaseContainer :is-mypage="true">
    <div class="flex justify-between py-8">
      <h2 class="text-2xl">Hej {{ userName || "Bruger" }}</h2>
      <h2 class="underline text-2xl">Log ud</h2>
    </div>

    <PartialAccountNavigation />
    <section class="space-y-10 mt-10">
      <!-- Profiloplysninger -->
      <div class="bg-primary text-white p-6 rounded-md">
        <h3 class="text-xl font-bold mb-4">Profildetaljer</h3>
        <div class="space-y-2">
          <label class="block text-sm">Navn</label>
          <input
            type="text"
            value="Camilla"
            class="w-full bg-transparent border-b border-secondary outline-none"
          />

          <label class="block text-sm mt-4">Brugernavn</label>
          <input
            type="text"
            value="oog"
            class="w-full bg-transparent border-b border-secondary outline-none"
          />

          <label class="block text-sm mt-4">Email</label>
          <input
            type="email"
            value="omargaal123@gmail.com"
            class="w-full bg-transparent border-b border-secondary outline-none"
          />
        </div>
        <button class="bg-secondary text-white px-4 py-2 rounded mt-6">
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
            value="Frydenlunds alle nr 35 1tv"
            class="w-full bg-transparent border-b border-secondary outline-none"
          />

          <div class="flex gap-4 mt-4">
            <div class="w-1/2">
              <label class="block text-sm">Postnummer</label>
              <input
                type="text"
                value="8210"
                class="w-full bg-transparent border-b border-secondary outline-none"
              />
            </div>
            <div class="w-1/2">
              <label class="block text-sm">By</label>
              <input
                type="text"
                value="Aarhus"
                class="w-full bg-transparent border-b border-secondary outline-none"
              />
            </div>
          </div>

          <label class="block text-sm mt-4">Telefonnummer</label>
          <select
            class="w-full bg-transparent border-b border-secondary outline-none"
          >
            <option>Land</option>
          </select>
        </div>
        <button class="bg-secondary text-white px-4 py-2 rounded mt-6">
          Gem ændringer
        </button>
      </div>

      <!-- Ændring af adgangskode -->
      <div class="bg-primary text-white p-6 rounded-md">
        <h3 class="text-xl font-bold mb-4">Ændrer Adgangskode</h3>
        <div class="space-y-2">
          <label class="block text-sm">Gamle Adgangskode</label>
          <input
            type="password"
            value="Omar123"
            class="w-full bg-transparent border-b border-secondary outline-none"
          />

          <label class="block text-sm mt-4">Ny Adgangskode</label>
          <input
            type="password"
            value="Omar1234"
            class="w-full bg-transparent border-b border-secondary outline-none"
          />
        </div>
        <button class="bg-secondary text-white px-4 py-2 rounded mt-6">
          Gem ændringer
        </button>
      </div>

      <!-- Slet profil -->
      <div class="text-right">
        <NuxtLink to="#" class="text-red-600 underline text-lg"
          >Slet min profil</NuxtLink
        >
      </div>
    </section>
  </BaseContainer>
</template>
