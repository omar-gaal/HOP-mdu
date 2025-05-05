<script setup lang="ts">
import DesktopNav from "~/Navigation/DesktopNav.vue";
import MobileNav from "~/Navigation/MobileNav.vue";
import TheFooter from "~/components/global/TheFooter.vue"; // make sure this import exists
import { useWindowSize } from "#imports";
import { useAuthStore } from '@/stores/auth';

const { width } = useWindowSize();
const isMobile = computed(() => width.value < 768);
</script>

<template>
  <!-- Set up full-height flex layout -->
  <div class="min-h-screen flex flex-col">

    <!-- Navigation -->
    <div class="sticky top-0 z-50 bg-primary shadow-md">
      <DesktopNav  v-if="!isMobile" />
      <MobileNav v-else />
    </div>

    <!-- Page content grows to fill space -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer sticks to bottom if content is short -->
    <TheFooter />
  </div>
</template>
