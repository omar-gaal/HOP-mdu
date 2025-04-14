<script setup lang="ts">

</script>

<template>
  <header class="bg-primary flex items-center justify-between px-6 py-4">
    <!-- Left side (logo) -->
    <img class="w-28" src="../assets/icon/logo.webp" alt="Logo">

    <!-- Right side (nav + login) -->
    <div class="flex items-center gap-6">
      <nav class="text-white text-lg flex gap-4">
        <NuxtLink to="/">Produkter</NuxtLink>
        <NuxtLink to="/about">Services</NuxtLink>
        <NuxtLink to="/about">Om os</NuxtLink>
      </nav>
      <img src="../assets/icon/fav-w.png" alt="heart icon" class="w-6 h-6" />
      <BaseLoginBtn />
    </div>
  </header>
</template>