<script setup>
import { ref } from "vue";


import heroImage from "../../assets/img/hero.webp";

function scrollToProducts() {
  const section = document.getElementById("productSection");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <BaseImage
    :src="heroImage"
    alt="Hero background"
    :width="1280"
    :height="854"
    :class="'w-full object-cover relative h-[770px]  sm:h-[999px] brightness-75'"
  />

  <div class="flex flex-col gap-4  absolute bottom-40 md:bottom-44 2xl:bottom-96   left-10 pl-30">
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
