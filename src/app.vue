<script setup lang="ts">

import { useAuthStore } from '#imports';
onMounted(() => {
  const auth = useAuthStore();
  auth.init();
});
</script>

<template>
  <div>
   

    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
  </div>
</template>