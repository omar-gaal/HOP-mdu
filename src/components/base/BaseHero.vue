<script setup lang="ts">
import BaseImage from './baseImage.vue';
import BaseHeroImage from '../../assets/img/heroImage-1.webp';
// import BaseHeroImage from '/img/heroImage-1.webp';




</script>

<template>
    <BaseImage
      :src="BaseHeroImage"
      alt="Hero background"
      width="1920"
      height="800"
      className="w-full object-cover"
    />
  </template>
