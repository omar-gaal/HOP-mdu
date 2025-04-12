<script setup lang="ts">


</script>

<template>
  <header>
    <nav class="p-4 bg-gray-100">
      <NuxtLink to="/" class="mr-4 ">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>
  </header>

  <div >
    <slot />
  </div>
</template>
