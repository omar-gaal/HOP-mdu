<script setup lang="ts">
import BaseHero from "~/components/base/BaseHero.vue";
import ProductList from "~/components/partial/ProductList.vue";
import { useFavoritesStore } from "#imports";
import { productData } from "~/data/productData";


const favorites = useFavoritesStore();
</script>



<template>
  <main>
    <BaseContainer :fullWidth="false">
      <BaseHero />
  
    </BaseContainer>


    <BaseContainer :isFrontpage="true">
      <section class="bg-white w-full py-6">
        <ProductList :products="productData" :favorites="favorites" />
      </section>
    </BaseContainer>
  </main>
</template>
