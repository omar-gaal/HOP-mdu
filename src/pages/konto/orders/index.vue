<script setup lang="ts">
definePageMeta({
  middleware: 'protected',
});

import { ref, computed } from 'vue';
import { useAuthStore } from '#imports';
import laptop from "@/assets/img/laptop.webp";
import iphone from "@/assets/img/iphone.webp";
import playstationPro from "@/assets/img/ps5.webp";
import OrderCard from '~/components/partial/OrderCard.vue';
import { useUsername } from '#imports'

const userName = useUsername()
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
      <h2 class="text-2xl">Hej {{  userName || 'Bruger' }}</h2>
      <button @click="logout" class="text-2xl underline">Log ud</button>
    </div>

    <PartialAccountNavigation class="mb-10" />

    <section class="w-full py-6">
      <div class="max-w-5xl mx-auto px-4">
        <h2 class="text-2xl font-semibold mb-6 text-primary">Mine ordrer</h2>

        <div
          v-for="order in sorteredeOrdrer"
          :key="order.id"
          class="bg-primary text-white rounded-md p-4 mb-4 border"
        >
          <OrderCard :order="order" class="border border-primary" />
        </div>

        <div class="h-24"></div>
      </div>
    </section>
  </BaseContainer>
</template>