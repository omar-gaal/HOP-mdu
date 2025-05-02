<script setup lang="ts">
definePageMeta({
  middleware: 'protected',
});

import { ref, computed } from 'vue';
import { useAuthStore } from '#imports';
import laptop from "@/assets/img/laptop.webp";
import iphone from "@/assets/img/iphone.webp";
import playstationPro from "@/assets/img/ps5.webp";

const auth = useAuthStore();

async function logout() {
  await auth.logout();
}

const sortering = ref("nyeste");

const orders = [
  {
    id: 1,
    image: laptop,
    varenr: "Varenr. 77777",
    productName: "X5000 Pro Series",
    price: "3000,00 DKK",
    status: "Afsluttet",
    date: "04.04.2025",
    fakturaLink: "#",
  },
  {
    id: 2,
    image: iphone,
    varenr: "Varenr. 87765",
    productName: "iPhone 12 Pro",
    price: "1500,00 DKK",
    status: "Afsluttet",
    date: "04.04.2025",
    fakturaLink: "#",
  },
  {
    id: 3,
    image: playstationPro,
    varenr: "Varenr. 87778",
    productName: "Playstation 5 Pro",
    price: "2500,00 DKK",
    status: "Afsluttet",
    date: "04.04.2025",
    fakturaLink: "#",
  },
];

const sorteredeOrdrer = computed(() => {
  return [...orders].sort((a, b) => {
    const datoA = new Date(a.date.split(".").reverse().join("-"));
    const datoB = new Date(b.date.split(".").reverse().join("-"));
    return sortering.value === "nyeste"
      ? datoB.getTime() - datoA.getTime()
      : datoA.getTime() - datoB.getTime();
  });
});
</script>

<template>
  <BaseContainer :is-mypage="true">
    <div class="flex justify-between py-8">
      <h2 class="text-2xl">Hej {{ auth.user?.userName || 'Bruger' }}</h2>
      <button @click="logout" class="text-2xl underline">Log ud</button>
    </div>

    <PartialAccountNavigation class="mb-10" />

    <div class="flex justify-end mb-4">
      <label class="mr-2 text-sm text-gray-700">Sorter efter:</label>
      <select v-model="sortering" class="border rounded px-2 py-1 text-sm">
        <option value="nyeste">Nyeste først</option>
        <option value="ældste">Ældste først</option>
      </select>
    </div>

    <section class="bg-white w-full py-6">
      <div class="max-w-5xl mx-auto px-4">
        <h2 class="text-2xl font-semibold mb-6">Mine ordrer</h2>

        <div
          v-for="order in sorteredeOrdrer"
          :key="order.id"
          class="border p-4 mb-6 rounded-lg shadow-sm"
        >
          <div class="flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
            <div>
              <p class="text-sm uppercase">Status</p>
              <p class="font-medium">{{ order.status }}</p>
            </div>
            <div>
              <p class="text-sm uppercase">Bestillingsdato</p>
              <p class="font-medium">{{ order.date }}</p>
            </div>
            <div class="flex items-center gap-4">
              <img
                :src="order.image"
                :alt="order.productName"
                class="w-20 h-20 object-contain"
              />
              <div>
                <p class="text-sm uppercase">Produkt</p>
                <p class="font-medium">{{ order.productName }}</p>
              </div>
            </div>
            <div>
              <p class="text-sm uppercase">Ordredetaljer</p>
              <NuxtLink :to="order.fakturaLink" class="underline text-sm">
                Faktura
              </NuxtLink>
            </div>
            <div class="text-right">
              <p class="text-sm">{{ order.varenr }}</p>
              <p class="text-lg font-bold mt-2">{{ order.price }}</p>
            </div>
          </div>
        </div>

        <div class="h-24"></div>
      </div>
    </section>
  </BaseContainer>
</template>