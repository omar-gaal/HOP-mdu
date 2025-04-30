<script setup lang="ts"></script>

<template>
  <header class="bg-primary flex items-center justify-between px-20 py-102">
    <NuxtLink to="/">
      <img class="w-[250px]" src="../assets/icon/logo.webp" alt="Logo" />
    </NuxtLink>
    <div class="flex items-center gap-6">
      <nav class="text-white text-lg flex gap-4">
  <NuxtLink to="/" class="text-[25px]">Produkter</NuxtLink>
<NuxtLink to="/page-not-found" class="text-[25px]">Services</NuxtLink>
<NuxtLink to="/page-not-found" class="text-[25px]">Om os</NuxtLink>
      </nav>
      <img src="../assets/icon/fav-w.png" alt="heart icon" class="w-8 h-8" />
      <BaseLoginBtn />
    </div>
  </header>
</template>
