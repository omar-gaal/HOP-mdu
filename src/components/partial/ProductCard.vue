<script lang="ts" setup>


import image1 from '@/assets/img/1.png';
import image2 from '@/assets/img/2.png';


const productImage = ref([
  {
    id: 1,
    image: image1,
    varenr: 'Varenr. 77777',
    productName: 'X5000 Pro Series',
    price: '3000,00 DKK',
    stock: '37 på lager',
  },
  {
    id: 2,
    image: image2,
    varenr: 'Varenr. 87765',
    productName: 'Iphone 12 Pro',
    price: '1500,00 DKK',
    stock: '2 på lager',
  },

  {
    id: 3,
    image: image1,
    varenr: 'Varenr. 77777',
    productName: 'X5000 Pro Series',
    price: '3000,00 DKK',
    stock: '37 på lager',
  },
  {
    id: 4,
    image: image2,
    varenr: 'Varenr. 87765',
    productName: 'Iphone 12 Pro',
    price: '1500,00 DKK',
    stock: '2 på lager',
  },
]);
</script>

<template>
  <h1 class="text-primary text-5xl font-bold pb-6 pl-4">Alle produkter </h1>
  <div class=" grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center  ">
  
    <div 
      v-for="(product, index) in productImage" 
      :key="product.id" 
      class="bg-white w-80 rounded overflow-hidden shadow "
    >
      <div class="relative bg-[#6B7280]">
        <img :src="product.image" alt="product image" class="w-full h-60 object-none" />
        <img src="../../assets/icon/fav-p.webp" alt="favorite" class="absolute top-3 cursor-pointer right-3 w-6 h-6" />
      </div>

      <div class="p-4">
        <div class="flex justify-between items-center text-sm text-gray-400">
          <p>{{ product.varenr }}</p>
          <span class="bg-[#E5E7EB] text-black text-xs rounded px-2 py-1">{{ product.stock }}</span>
        </div>

        <p class="mt-2 font-semibold">{{ product.productName }}</p>

        <p class="text-black font-bold mt-1">
          {{ product.price }} <span class="text-xs font-normal text-gray-400">Eksl.moms</span>
        </p>
      </div>
    </div>
  </div>
</template>
