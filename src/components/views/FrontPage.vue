<!-- Hele forsiden – kalder fx BaseHero, produktgrid -->

<script setup lang="ts">
import BaseHero from "~/components/base/BaseHero.vue";
const modal = useModal();
</script>

<template>
  <main>
    <BaseContainer :fullWidth="false">
      <BaseHero />
    </BaseContainer>



      <PartialCreateForm />
    </BaseModal>

    <BaseContainer>
      <section class="bg-white w-full py-6">
        <PartialProductCard />
      </section>
 </BaseContainer> 



</main>
 







</template>
