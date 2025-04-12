<!-- Hele forsiden – kalder fx BaseHero, produktgrid -->


<script setup lang="ts">
import BaseHero from '~/components/base/BaseHero.vue';
import BaseButton from '~/components/base/BaseButton.vue';

// defineProps<{
//   data: {
//     heroList: {
//       content: {
//         heroHeading: string;
//         heroSubHeading: string;
//         heroCallToAction: {
//           name: string;
//           url: string;
//         }[];
//       };
//     }[];
//   };
// }>();
</script>

<template>
<BaseContainer :fullWidth = false >
  <BaseHero/>
 
</BaseContainer>


<BaseContainer :fullWidth = true >
  <BaseHero/>
 
</BaseContainer>
 
</template>
