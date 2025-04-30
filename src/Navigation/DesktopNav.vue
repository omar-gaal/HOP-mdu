<script setup lang="ts">


// const initials = computed(() => {
//   if (!authStore.user?.name) return '';
//   const names = authStore.user.name.split(' ');
//   return (names[0]?.[0] ?? '') + (names[1]?.[0] ?? '');
// });



</script>

<template>
  <header class="bg-primary flex items-center justify-between px-6 py-4">
    <NuxtLink to="/">
      <img class="w-28" src="../assets/icon/logo.webp" alt="Logo">
    </NuxtLink>
    <div class="flex items-center gap-6">
      <nav class="text-white text-lg flex gap-4">
        <NuxtLink to="/">Produkter</NuxtLink>
        <NuxtLink to="/page-not-found">Services</NuxtLink>
        <NuxtLink to="/page-not-found">Om os</NuxtLink>
      </nav>
        <img src="../assets/icon/fav-w.png" alt="heart icon" class="w-6 h-6" />
      <BaseLoginBtn />
      <!-- <span>{{ initials }}</span> -->
    </div>
  </header>
</template>
