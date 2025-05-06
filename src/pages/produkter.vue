<script setup lang="ts">
import { PartialProductList } from "#components";

import { useFavoritesStore } from "#imports";
import { productData } from "~/data/productData";

const modal = useModal();
const favorites = useFavoritesStore();

</script>


<template>
   

   <BaseContainer :isFrontpage="true">
      <section class="bg-white w-full py-6">
        <PartialProductList :products="productData" :favorites="favorites" />
      </section>
    </BaseContainer>
</template>