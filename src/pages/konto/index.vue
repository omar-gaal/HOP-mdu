<script setup lang="ts">


definePageMeta({    
    middleware: 'protected',
});

import BaseInfoCard from '@/components/base/BaseInfoCard.vue'
import { useAuthStore } from '#imports';
const auth = useAuthStore();

</script>

<template>
<BaseContainer :is-mypage="true">

  <div class="flex justify-between py-8 ">
    <h2 class="text-2xl">Hej Omar</h2>
    <h2 class="underline text-2xl">Log ud</h2>
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
