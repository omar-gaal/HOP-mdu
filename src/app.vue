<script setup lang="ts">

import { useAuthStore } from '#imports';
onMounted(async () => {
  const auth = useAuthStore();
  auth.init();

  const authCookie = useCookie('auth');
if (authCookie.value) {
  const result = await auth.checkAuth();
  if (result) {
    console.log('testing true');
  }
}
});



</script>

<template>
  <div>
   

    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
  </div>
</template>