<script setup lang="ts">
import ProductCard from "./ProductCard.vue";


const selectedCategory = ref("Alle produkter");


interface Product {
  id: number;
  image: string;
  varenr: string;
  productName: string;
  price: string | number;
  stock: string;
  category: string;
}

const props = defineProps<{
  products: Product[];
  favorites: any; 
}>();

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'Alle produkter') return props.products;
  return props.products.filter(
    (product) => product.category === selectedCategory.value
  );
});

</script>

<template>
  <h1 id="productSection" class="text-5xl text-black flex flex-col gap-4 left-25 pl-20 w-full mb-10 mt-5">Alle produkter</h1>
   <div class="flex flex-wrap left-25 pl-20 gap-6 mb-8 text-black text-lg">
    <span @click="selectedCategory = 'Alle produkter'" class="underline cursor-pointer">Alle produkter</span>
    <span @click="selectedCategory = 'computer'" class="underline cursor-pointer">Computer</span>
    <span @click="selectedCategory = 'mobil'" class="underline cursor-pointer">Mobil</span>
    <span @click="selectedCategory = 'playstation'" class="underline cursor-pointer">Playstation</span>
    <span @click="selectedCategory = 'løbehjul'" class="underline cursor-pointer">Løbehjul</span>
    <span @click="selectedCategory = 'microphone'" class="underline cursor-pointer">Microphone</span>
    <span @click="selectedCategory = 'kamera'" class="underline cursor-pointer">Kamera</span>
    <span @click="selectedCategory = 'hojtaler'" class="underline cursor-pointer">Højtaler</span>
    <span @click="selectedCategory = 'horeboffer'" class="underline cursor-pointer">Headphones</span>
  </div>
   
  <div
    class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center"
  >
    <ProductCard
      class="scale-100 hover:scale-105"
      v-for="product in filteredProducts"
      :key="product.id"
      :product="product"
      :favorites="props.favorites" 
    />
  </div>
</template>
