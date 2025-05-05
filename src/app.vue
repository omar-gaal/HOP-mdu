<script setup lang="ts">

// import { useAuthStore } from '#imports';
// onMounted(async () => {
//   const auth = useAuthStore();
//   auth.init();

//   const authCookie = useCookie('auth');
// if (authCookie.value) {
//   const result = await auth.checkAuth();
//   if (result) {
//     console.log('testing true');
//   }
// }
// });

import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';

onMounted(() => {
  const authStore = useAuthStore();
  authStore.init();
});

</script>

<template>
  <div>
   

    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
  </div>
</template>