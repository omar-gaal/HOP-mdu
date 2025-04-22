<script setup lang="ts">
import { ref } from 'vue'

interface NavigationItem {
  NavName: string
}

const navigationName = ref<NavigationItem[]>([
  { NavName: 'Min Side' },
  { NavName: 'Profile' },
  { NavName: 'Favorite' },
  { NavName: 'Ordrehistorik' },  
])
</script>

<template>

   <nav>
    <ul></ul>
   </nav>
</template>