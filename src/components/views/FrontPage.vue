<!-- Hele forsiden – kalder fx BaseHero, produktgrid -->


<script setup lang="ts">
import BaseHero from '~/components/base/BaseHero.vue';
import BaseButton from '~/components/base/BaseButton.vue';
import DesktopMyPageNavigation from '~/Navigation/DesktopMyPageNavigation.vue';
import DesktopNav from '~/Navigation/DesktopNav.vue';

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
 
<BaseContainer :fullWidth = false   >
  <BaseHero/>
</BaseContainer>




 
</template>
