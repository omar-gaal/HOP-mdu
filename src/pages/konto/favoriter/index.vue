<script setup lang="ts">
definePageMeta({
  middleware: 'protected',
});

import { useUsername } from '#imports';
import { useAuthStore } from '#imports';
import { useFavoritesStore } from '#imports';
import { productData } from '@/data/productData'; 
import PartialProductCard from '@/components/partial/ProductCard.vue';

const auth = useAuthStore();
const userName = useUsername();
const favorites = useFavoritesStore();

const favoritesProducts = computed(() =>
  productData.filter((product) => favorites.items.includes(product.id))
);

async function logout() {
  await auth.logout();
}
</script>

<template>
<BaseContainer :is-mypage="true">
    
  <div class="flex justify-between py-8">
    <h2 class="text-2xl">Hej {{ userName || 'Bruger' }}</h2>
    <button @click="logout()" class=" cursor-pointer underline text-2xl">Log ud</button>
  </div>

<PartialAccountNavigation class="mb-20"
/>

<transition-group name="fade" tag="div" class="grid grid-cols-1 md:grid-cols-2 place-items-center gap-6">
  <PartialProductCard
    v-for="product in favoritesProducts"
    :key="product.id"
    :product="product"
    :favorites="favorites"
  />
</transition-group>

</BaseContainer>


    
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>