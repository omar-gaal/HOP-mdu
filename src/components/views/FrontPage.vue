<!-- Hele forsiden – kalder fx BaseHero, produktgrid -->

<script setup lang="ts">
import BaseHero from "~/components/base/BaseHero.vue";
</script>

<template>
  <main class="relative">
    <BaseContainer :fullWidth="false">
      <BaseHero />
    </BaseContainer>

    <BaseModal class="bg-white absolute top-1/2 left-1/2">
      <h1>hhh</h1>
      <p>description</p>
    </BaseModal>

        <BaseModal class="bg-white absolute top-1/2 left-1/2">
      <h1>hhh</h1>
      <p>description</p>
    </BaseModal>
  </main>
</template>
