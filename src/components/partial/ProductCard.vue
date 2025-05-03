<script setup lang="ts">
import { useFavoritesStore } from '#imports';
import { useAuthStore } from '#imports';
import ProductList from './ProductList.vue';

defineProps<{
  product: {
    id: number;
    image: string;
    varenr: string;
    productName: string;
    price: string | number;
    stock: string;
  }
}>()
const favFilled = new URL('../../assets/icon/fav-filled.png', import.meta.url).href;
const favP = new URL('../../assets/icon/fav-p.webp', import.meta.url).href;

const favorites = useFavoritesStore();
const auth = useAuthStore();

function handleFavoriteClick() {
  if (!auth.isAuthenticated) {
    alert("Du skal være logget ind for at tilføje favoritter.");
    return;
  }
  favorites.toggleFavorite(product.id);
}
</script>
:src="favorites.isFavorite(product.id) ? '../../assets/icon/fav-filled.png' : '../../assets/icon/fav-p.webp'"

<template>
  <div class="bg-white w-80 rounded overflow-hidden shadow">
    <div class="relative bg-[#6B7280]">
      <img :src="product.image" alt="product image" class="w-full h-60 object-cover" />
      <!-- Corrected cursor class and path to images -->
      <img :src="favorites.isFavorite(product.id) ? favFilled : favP"
           @click="handleFavoriteClick"
           class="absolute top-3 right-3 w-6 h-6 cursor-pointer"
           alt="favorite icon" />
    </div>

    <div class="p-4">
      <div class="flex justify-between text-sm text-gray-400">
        <p>{{ product.varenr }}</p>
        <span class="bg-[#E5E7EB] text-black text-xs rounded px-2 py-1">{{ product.stock }}</span>
      </div>
      <p class="mt-2 font-semibold">{{ product.productName }}</p>
      <p class="text-black font-bold mt-1">
        {{ product.price }} <span class="text-xs text-gray-400 font-normal">Eksl.moms</span>
      </p>
    </div>
  </div>
</template>
