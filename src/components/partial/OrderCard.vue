<script setup lang="ts">
defineProps<{
  order: {
    id: number;
    image: string;
    varenr: string;
    productName: string;
    price: string;
    status: string;
    date: string;
    fakturaLink: string;
  };
}>();
</script>

<template>
  <div class="border p-4 mb-6 rounded-lg shadow-sm">
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
        <img :src="order.image" :alt="order.productName" class="w-20 h-20 object-contain" />
        <div>
          <p class="text-sm uppercase">Produkt</p>
          <p class="font-medium">{{ order.productName }}</p>
        </div>
      </div>
      <div>
        <p class="text-sm uppercase">Ordredetaljer</p>
        <NuxtLink :to="order.fakturaLink" class="underline text-sm">Faktura</NuxtLink>
      </div>
      <div class="text-right">
        <p class="text-sm">{{ order.varenr }}</p>
        <p class="text-lg font-bold mt-2">{{ order.price }}</p>
      </div>
    </div>
  </div>
</template>