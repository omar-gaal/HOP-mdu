<script setup lang="ts">
import { ref } from "vue";
import baseImage from "./baseImage.vue";
import BaseButton from "./BaseButton.vue";
import heroImage from "../../assets/img/hero.webp";

const productSection = ref<HTMLElement | null>(null);

function scrollToProducts() {
  productSection.value?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <BaseImage
    :src="heroImage"
    alt="Hero background"
    :width="1280"
    :height="854"
    :className="'w-full object-cover relative h-[856px] brightness-75'"
  />

  <div class="flex flex-col gap-4 absolute bottom-1/2 right-1/2 pl-6">
    <h1 class="text-4xl text-white">Professionel elektronik</h1>
    <span class="text-2xl text-white">direkte til din forretning</span>

    <BaseButton
      label="Produkter"
      @click="scrollToProducts"
      :icon="true"
      iconSize=""
      type="button"
      class="w-36 h-14"
    />
  </div>
</template>
