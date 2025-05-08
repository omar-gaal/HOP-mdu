<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '#imports';
import { useModal } from "@/stores/modal";



const isOpen = ref(false);

const auth = useAuthStore();
const modal = useModal();


interface NavigationItem {
  navName: string;
  href: string;
 

}




const navItem = ref<NavigationItem[]>([
  { navName: 'Produkter', href: '/produkter' },
  { navName: 'Services', href: '/page-not-found' },
  { navName: 'Om os', href: '/page-not-found' },
  { navName: 'Min side', href: '/konto' },
]);


const logout = async () => {
  isOpen.value = false;
  await auth.logout();
}

</script>

<template>
  <!-- Mobile Header -->
  <header v-if="!isOpen" class="flex bg-primary h-20 justify-between items-center px-4">
    <NuxtLink to="/">
    <img src="../assets/icon/logo.webp" alt="Logo" class=" w-32 h-full" />
    </NuxtLink>
    <nav class="flex items-center gap-6">
      <NuxtLink to="/">
        <img v-if="!auth.isAuthenticated" class="h-10 w-10" src="../assets/icon/userIcon.webp" alt="User icon" />
      </NuxtLink>
      <NuxtLink to="/konto">
        <BaseInitialIcon v-if="auth.isAuthenticated"
      class="w-12 h-12 "
       :initials="auth.user?.userName?.slice(0, 2).toUpperCase()"
      />
      </NuxtLink>
     
      <button @click="isOpen = true" aria-label="Open menu">
        <img class="h-7 w-12" src="../assets/icon/hamburgerMenu.png" alt="Open menu icon" />
      </button>
    </nav>
  </header>

  <!-- Dropdown Nav -->

  <transition  name="fade">
    <nav  v-if="isOpen" aria-label="Mobile Navigation" class="absolute top-0 left-0 w-full z-40 bg-primary">
    <header class="flex h-20 justify-between items-center px-4">
      <NuxtLink to="/">
        <img src="../assets/icon/logo.webp" alt="Logo" class=" w-1/2 h-full" />
      </NuxtLink>      <div class="flex items-center gap-6">
        <img v-if="!auth.isAuthenticated" class="h-10 w-10" src="../assets/icon/userIcon.webp" alt="User icon" />
        <NuxtLink to="/konto">
        <BaseInitialIcon v-if="auth.isAuthenticated"
      class="w-12 h-12 "
       :initials="auth.user?.userName?.slice(0, 2).toUpperCase()"
      />
      </NuxtLink>
        <button @click="isOpen = false" aria-label="Close menu">
          <img src="../assets/icon/close.png" alt="Close menu icon" />
        </button>
      </div>
    </header>
    <ul class="flex flex-col items-center gap-11 py-32">
  
  <li v-for="(item, index) in navItem" :key="index">
    <NuxtLink
      :to="item.href"
      class="text-white text-2xl text-center block"
      @click="isOpen = false"
    >
      {{ item.navName }}
      <hr class="w-80 border-t-2 border-secondary mt-2" />
    </NuxtLink>
  </li>

 
  <li v-if="!auth.isAuthenticated">
    <button
      class="text-white text-2xl text-center block"
      @click="modal.open('login'); isOpen = false"
    >
      Log ind
      <hr class="w-80 border-t-2 border-secondary mt-2" />
    </button>
  </li>


  <li v-else>
    <button
      class="text-white text-2xl text-center block"
      @click="logout"
    >
      Log ud
      <hr class="w-80 border-t-2 border-secondary mt-2" />
    </button>
  </li>
</ul>
  </nav>

  </transition>

  



 


  
 
  
  
 
</template>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>