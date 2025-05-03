<script setup lang="ts">
import { useAuthStore } from '#imports'; 
import { defineProps } from 'vue';  

import favP from '@/assets/icon/fav-p.webp';
import favFilled from '@/assets/icon/fav-filled.png';


const props = defineProps<{
  product: {
    id: number;
    image: string;
    varenr: string;
    productName: string;
    price: string | number;
    stock: string;
  };
  favorites: any;  
}>();


const auth = useAuthStore();

function handleFavoriteClick() {
  if(!auth.isAuthenticated) {
    alert("du skal være logget ind")
  } else {
    props.favorites.toggleFavorite(props.product.id);  
  }
}
</script>

<template>
  <div class="bg-white w-80 rounded overflow-hidden shadow">
    <div class="relative bg-[#6B7280]">
      <img :src="props.product.image" alt="product image" class="w-full h-60 object-cover" />
      <img
        @click="handleFavoriteClick"
        class="absolute top-3 right-3 w-6 h-6 cursor-pointer"
       :src="props.favorites.isFavorite(props.product.id) ? favFilled : favP"
        alt="favorite icon"
      />
    </div>
        
    <div class="p-4">
      <div class="flex justify-between text-sm text-gray-400">
        <p>{{ props.product.varenr }}</p>
        <span class="bg-[#E5E7EB] text-black text-xs rounded px-2 py-1">{{ props.product.stock }}</span>
      </div>
      <p class="mt-2 font-semibold">{{ props.product.productName }}</p>
      <p class="text-black font-bold mt-1">
        {{ props.product.price }} <span class="text-xs text-gray-400 font-normal">Eksl.moms</span>
      </p>
    </div>
  </div>
</template>
