
<script setup lang="ts">

const userData = ref([

{ 
    id: 1,
    name: 'Omar Gaal',
    mail: 'omargaal123@gmail.com',
    number: 4560635399,

}

])

</script>


<template>

<BaseContainer :is-mypage="true">

    <div class="flex justify-between ">
  <h2 class="text-2xl">Hej Omar</h2>
  <h2 class="underline text-2xl">Log ud</h2>
</div>

<PartialAccountNavigation/>

<!-- content for  
Mine Detajler 
Adresse  

-->


















</BaseContainer>
</template>

