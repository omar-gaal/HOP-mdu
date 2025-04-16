<!-- Hele forsiden – kalder fx BaseHero, produktgrid -->

<script setup lang="ts">
import BaseHero from "~/components/base/BaseHero.vue";
</script>

<template>


 <main>


  <BaseContainer :fullWidth = false   >
  <BaseHero/>
</BaseContainer>

<BaseModal>

<PartialLoginForm/>

<PartialCreateForm />


</BaseModal>








 </main> 

</template>
