<script setup lang="ts">
import ProductCard from "./ProductCard.vue";


interface Product {
  id: number;
  image: string;
  varenr: string;
  productName: string;
  price: string | number;
  stock: string;
}

defineProps<{
  products: Product[];
}>();
</script>

<template>
  <h1 id="productSection" class="text-5xl text-black flex flex-col gap-4 left-25 pl-20 w-full mb-10 mt-5">Alle produkter</h1>
   <div class="flex flex-wrap left-25 pl-20 gap-6 mb-8 text-black text-lg">
    <span class="underline cursor-pointer">Alle produkter</span>
    <span class="underline cursor-pointer">Computer</span>
    <span class="underline cursor-pointer">Mobil</span>
    <span class="underline cursor-pointer">Playstation</span>
    <span class="underline cursor-pointer">Løbehjul</span>
    <span class="underline cursor-pointer">Kamera</span>
    <span class="underline cursor-pointer">Marshall</span>
    <span class="underline cursor-pointer">Headphones</span>
  </div>
   
  <div
    class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center"
  >
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
