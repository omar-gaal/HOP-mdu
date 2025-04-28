<!-- <script lang="ts" setup>


import laptop from '@/assets/img/laptop.webp';
import iphone from '@/assets/img/iphone.webp';
import playstationPro from '@/assets/img/ps5.webp';
import scooter from '@/assets/img/scooter.webp';
import microphone from '@/assets/img/mikrofon.webp';
import kamera from '@/assets/img/kamera.webp';
import hojtaler from '@/assets/img/hojtaler.webp';
import kamera2 from '@/assets/img/kamera2.webp';
import horeboffer from '@/assets/img/horeboffer.webp';


interface ProductCardItem {
  id: number;
  image: string;
  varenr: string;
  price: string | number;
  productName: string;
  stock: string; 

}


const productCard = ref<ProductCardItem[]>([      
  {   
    id: 1,
    image: laptop,
    varenr: 'Varenr. 77777',
    productName: 'X5000 Pro Series',
    price: '3000,00 DKK',
    stock: '37 på lager',
  },
  {
    id: 2,
    image: iphone,
    varenr: 'Varenr. 87765',
    productName: 'Iphone 12 Pro',
    price: '1500,00 DKK',
    stock: '2 på lager',
  },
  {
    id: 3,
    image: playstationPro,
    varenr: 'Varenr. 87778',
    productName: 'Playstation 5 pro',
    price: '2500,00 DKK',
    stock: '20 på lager',
  },
  {
    id: 4,
    image: scooter,
    varenr: 'Varenr. 87765',
    productName: 'El løbehjul',
    price: '2000,00 DKK',
    stock: '5 på lager',
  },
  {
    id: 5,
    image: microphone,
    varenr: 'Varenr. 87765',
    productName: 'El løbehjul',
    price: '2000,00 DKK',
    stock: '5 på lager',
  },
  {
    id: 6,
    image: kamera,
    varenr: 'Varenr. 87774',
    productName: 'Canon Eos 90D',
    price: '999,00 DKK',
    stock: '12 på lager',
  },

  {
    id: 7,
    image: hojtaler,
    varenr: 'Varenr. 87765',
    productName: 'Marshall',
    price: '800,00 DKK',
    stock: '15 på lager',
  },
  {
    id: 8,
    image: kamera2,
    varenr: 'Varenr. 87744',
    productName: 'Nikon D7500',
    price: '15000,00 DKK',
    stock: '5 på lager',
  },
  {
    id: 9,
    image: horeboffer,
    varenr: 'Varenr. 87744',
    productName: 'Nikon D7500',
    price: '15000,00 DKK',
    stock: '5 på lager',
  },

]);
</script>

<template>
  <h1 class="text-primary text-5xl font-bold pb-6 pl-4">Alle produkter </h1>
  <div class=" grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center  ">
  
    <div 
      v-for="(product, index) in productCard" 
      :key="product.id" 
      class="bg-white w-80 rounded overflow-hidden shadow "
    >
      <div class="relative bg-[#6B7280]">
        <img :src="product.image" alt="product image" class="w-full h-60 oobject-cover  " />
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
</template> -->


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