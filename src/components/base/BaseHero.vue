<script setup lang="ts">
import BaseImage from './BaseImage.vue';
import heroImage from '../../assets/img/hero.webp'
  






</script>
<template>


  <BaseImage
  :src="heroImage"
  alt="Hero background"
  :width="1280"
  :height="854"
  class="w-full object-cover relative  h-[856px]"
    />




<div class="flex flex-col gap-4 absolute bottom-1/4 right-1/8 pl-6">

  <h1 class="text-4xl text-white">Professionel elektronik</h1>
  <span class="text-2xl text-white">direkte til din forretning</span>

  <BaseButton
    label="Produkter"
    url="/"
    :icon="true"
    iconSize=""
    type="button"
    class="w-36 h-14"
    />
</div>

</template>

