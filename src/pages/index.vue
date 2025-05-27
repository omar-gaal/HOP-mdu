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

<h1>This is versionTwo</h1>
    <FrontPage/>

  

</template>
