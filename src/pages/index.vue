<script setup lang="ts">
// import useContentApi from '~/composables/useContentApi';
import FrontPage from '~/components/views/FrontPage.vue';

// const { getContent } = useContentApi();
// const { data, pending, error } = await useAsyncData(() =>
//   getContent('https://novicell-umbraco.ditnyewebsite.dk/da')
// );

definePageMeta({
  layout: 'default',

});


</script>

<template>

    <FrontPage/>
    <BaseContainer>
      <section class=" bg-white w-full h-24">
    Produkt list page 
  </section>
    </BaseContainer>
 

</template>
