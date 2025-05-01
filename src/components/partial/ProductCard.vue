<script setup lang="ts">
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
</script>

<template>
  <div class="bg-white w-80 rounded overflow-hidden shadow">
    <div class="relative bg-[#6B7280]">
      <img :src="product.image" alt="product image" class="w-full h-60 object-cover" />
      <img src="../../assets/icon/fav-p.webp" alt="favorite" class="absolute top-3 right-3 w-6 h-6 cursor-pointer" />
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