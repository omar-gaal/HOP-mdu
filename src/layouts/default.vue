<script setup lang="ts">
import DesktopNav from "~/Navigation/DesktopNav.vue";
import MobileNav from "~/Navigation/MobileNav.vue";
import TheFooter from "~/components/global/TheFooter.vue";
import { useWindowSize } from "#imports";
import { useAuthStore } from '@/stores/auth';
import { useModal } from "#imports";
const { width } = useWindowSize();
const isMobile = computed(() => width.value < 1080);
const modal = useModal()
</script>

<template>

  <div class="min-h-screen flex flex-col">

  
    <div class="sticky top-0 z-50 bg-primary shadow-md">
      <DesktopNav  v-if="!isMobile" />
      <MobileNav v-else />
    </div>

    

   
    <main class="flex-grow pb-64 sm:pb-20">
      <slot />
    </main>

    <BaseModal>
      <PartialLoginForm v-if="modal.activeForm === 'login'" />
      <PartialCreateForm v-else-if="modal.activeForm === 'create'" />
      <LoadingMessage v-else-if="modal.activeForm === 'loading'" />
      <SuccessMessage v-else-if="modal.activeForm === 'success'" />
      <ForgotPasswordForm v-else-if="modal.activeForm === 'forgot'" />
    </BaseModal>
    
    <TheFooter />
  </div>
</template>
