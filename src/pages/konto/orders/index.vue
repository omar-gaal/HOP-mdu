<script lang="ts">
// definePageMeta({
//   middleware: 'protected',
// });
</script>

<template>   
    <BaseContainer :is-mypage="true">
      
  <div class="flex justify-between py-8 ">
    <h2 class="text-2xl">Hej Omar</h2>
    <h2 class="underline text-2xl">Log ud</h2>
  </div>

       <PartialAccountNavigation/>
       <h1>Orderhistorik side </h1> 
    </BaseContainer>
</template>