<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

const navItem = ref([
  { navName: 'Produkter' },
  { navName: 'Services' },
  { navName: 'Om Os' },
  { navName: 'Min side' },
  { navName: 'Log in' },
]);
</script>

<template>
  <!-- Mobile Header -->
  <header v-if="!isOpen" class="flex bg-primary h-20 justify-between items-center px-4">
    <img src="../assets/icon/logo.webp" alt="Logo" class="h-full" />
    <nav class="flex items-center gap-6">
      <img class="h-10 w-10" src="../assets/icon/userIcon.webp" alt="User icon" />
      <button @click="isOpen = true" aria-label="Open menu">
        <img class="h-7 w-12" src="../assets/icon/hamburgerMenu.png" alt="Open menu icon" />
      </button>
    </nav>
  </header>

  <!-- Dropdown Nav -->
  <nav v-else aria-label="Mobile Navigation" class="absolute top-0 left-0 w-full z-40 bg-primary">
    <header class="flex h-20 justify-between items-center px-4">
      <img src="../assets/icon/logo.webp" alt="Logo" class="h-full" />
      <div class="flex items-center gap-6">
        <img class="h-10 w-10" src="../assets/icon/userIcon.webp" alt="User icon" />
        <button @click="isOpen = false" aria-label="Close menu">
          <img src="../assets/icon/close.png" alt="Close menu icon" />
        </button>
      </div>
    </header>

    <ul class="flex flex-col items-center gap-11 py-32">
      <li
        v-for="(item, index) in navItem"
        :key="index"
        class="text-white text-2xl text-center"
      >
      
        {{ item.navName }}
        <hr class="w-80 border-t-2 border-secondary mt-2" />
      </li>
    </ul>
  </nav>
</template>
