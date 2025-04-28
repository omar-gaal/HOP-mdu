
<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen bg-white text-primary p-8">
    <h1 class="text-7xl font-bold mb-4">404</h1>
    <p class="text-2xl mb-6 text-gray-600">Siden blev ikke fundet</p>
    <button
      @click="goHome"
      class="bg-secondary hover:bg-secondary-dark text-white font-semibold py-2 px-6 rounded transition"
    >
      Tilbage til forsiden
    </button>
  </div>
</template>
