<script setup lang="ts">
import ProductCard from './ProductCard.vue'

interface Product {
  id: number;
  image: string;
  varenr: string;
  productName: string;
  price: string | number;
  stock: string;
}

defineProps<{
  products: Product[]
}>()
</script>

<template>
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
