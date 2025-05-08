<script setup lang="ts">
import DesktopNav from "~/Navigation/DesktopNav.vue";
import MobileNav from "~/Navigation/MobileNav.vue";
import TheFooter from "~/components/global/TheFooter.vue";
import { useWindowSize } from "#imports";
import { useAuthStore } from '@/stores/auth';

const { width } = useWindowSize();
const isMobile = computed(() => width.value < 1080);
</script>

<template>

  <div class="min-h-screen flex flex-col">

  
    <div class="sticky top-0 z-50 bg-primary shadow-md">
      <DesktopNav  v-if="!isMobile" />
      <MobileNav v-else />
    </div>

   
    <main class="flex-grow">
      <slot />
    </main>

    
    <TheFooter />
  </div>
</template>
