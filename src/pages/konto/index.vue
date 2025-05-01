<script setup lang="ts">
definePageMeta({    
    middleware: 'protected',
});

import BaseInfoCard from '@/components/base/BaseInfoCard.vue'
import { useAuthStore } from '#imports';

const auth = useAuthStore();

async function logout() {
  await auth.logout();
}
</script>

<template>
<BaseContainer :is-mypage="true">
  <div class="flex justify-between py-8 ">
    <h2 class="text-2xl">Hej Omar</h2>
    <button @click="logout" class="text-2xl underline" >Log out </button>
  </div>
  <PartialAccountNavigation class="mb-24"/>
  <div class="flex flex-col gap-6  sm:flex-row sm:justify-between">
    <BaseInfoCard
       :title="'Mine detaljer'"
      :userName="auth.user?.userName"
       :email="auth.user?.email"
       linkText="Mine detaljer"
       linkUrl="/konto/profile"
    />
  </div>
</BaseContainer>
</template>
