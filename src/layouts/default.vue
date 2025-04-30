<script setup lang="ts">
import DesktopNav from "~/Navigation/DesktopNav.vue";
import MobileNav from "~/Navigation/MobileNav.vue";
import { useWindowSize } from "#imports";
import { useAuthStore } from '@/stores/auth';



const { width } = useWindowSize();
const isMobile = computed(() => width.value < 768);
</script>

<template>
  <DesktopNav v-if="!isMobile" />
  <MobileNav v-else />


  <div>
    <slot />
  </div>

    <TheFooter></TheFooter>





  
</template>
