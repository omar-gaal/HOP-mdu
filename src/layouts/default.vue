<script setup lang="ts">
import DesktopNav from "~/Navigation/DesktopNav.vue";
import MobileNav from "~/Navigation/MobileNav.vue";
import { useWindowSize } from "#imports";

const { width } = useWindowSize();
const isMobile = computed(() => width.value < 768);
</script>

<template>
  <DesktopNav v-if="!isMobile" />
  <MobileNav v-else />
  <BaseModal class="bg-white absolute top-1/2 left-1/2">
    <h1>hhh</h1>
    <p>description</p>
  </BaseModal>
  <div>
    <slot />
  </div>
</template>
