<script setup lang="ts">
definePageMeta({
  middleware: 'protected',
})

import { useUsername } from '#imports'

const userName = useUsername()
</script>

<template>
  <BaseContainer :is-mypage="true">
    <div class="flex justify-between py-8">
      <h2 class="text-2xl">Hej {{ userName || 'Bruger' }}</h2>
      <h2 class="underline text-2xl">Log ud</h2>
    </div>

    <PartialAccountNavigation />
    <h1>Profile page</h1>
  </BaseContainer>
</template>
