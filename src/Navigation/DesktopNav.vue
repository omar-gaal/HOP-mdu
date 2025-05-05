<script setup lang="ts">

import { useAuthStore } from '@/stores/auth';
import { useFavoritesStore } from '#imports';
const auth = useAuthStore();
const favoriter = useFavoritesStore();

const authCookie = useCookie('auth');



</script>

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


      <NuxtLink to="/konto/favoriter">
        <div class="relative">
          <img v-if="favoriter.count === 0"  src="../assets/icon/fav-w.png" alt="heart icon" class="w-6 h-6" />
          <img  v-if="favoriter.count > 0" src="../assets/icon/fav-filled.png" alt="heart icon" class="w-6 h-6" />

        </div>
      </NuxtLink>

        <BaseLoginBtn v-if="!auth.isAuthenticated" />
      
        <NuxtLink to="/konto">
        <BaseInitialIcon v-if="auth.isAuthenticated"
        :initials="auth.user?.userName?.slice(0, 2).toUpperCase()"
        />
        </NuxtLink>


    

    </div>
  </header>
</template>
