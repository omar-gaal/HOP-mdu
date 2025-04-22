<!-- Hele forsiden – kalder fx BaseHero, produktgrid -->

<script setup lang="ts">
import BaseHero from "~/components/base/BaseHero.vue";
</script>

<template>


 <main>


  <BaseContainer :isFrontpage = false   >
  <BaseHero/>
</BaseContainer>

<BaseModal>

<PartialLoginForm/>

<PartialCreateForm />


</BaseModal>


<BaseContainer :isFrontpage = true>
      <section class=" bg-white w-full py-6">
       <PartialProductCard/>
      </section>
 </BaseContainer> 








 </main> 

</template>
