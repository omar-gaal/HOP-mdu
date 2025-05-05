<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from '#app';


const route = useRoute();

interface NavigationItem {
  NavName: string;
  href: string;
}

const navigationName = ref<NavigationItem[]>([
  { NavName: 'Min Side', href: '/konto'},
  { NavName: 'Profil',  href: '/konto/profile' } ,
  { NavName: 'Favoritter',  href: '/konto/favoriter'},
  { NavName: 'Ordrehistorik', href: '/konto/orders'},
 

])
</script>

<template>
  <div class="bg-primary   text-white w-full max-w-screen-lg mx-auto">
    <ul class=" py-5 gap-9 sm:gap-0 px-5 flex flex-col md:flex-row items-left md:items-center justify-center text-xl md:text-2xl">
      <NuxtLink 
        v-for="(item, index) in navigationName" 
        :key="index"
        :to="item.href"
        class="flex flex-col md:flex-row md:items-center md:gap-24 md:px-6 py-2 hover:text-secondary"
        :class="{ 'text-secondary': route.path === item.href }"
      >
        <span>{{ item.NavName }}</span>
        
        
        <div 
          v-if="index !== navigationName.length - 1" 
          class="hidden md:block h-12 border-l border-white"
        ></div>

      
        <div class="md:hidden sm:w-3/4 w-full border-t border-secondary mt-2"></div>
      </NuxtLink>
    </ul>
  </div>
</template>
