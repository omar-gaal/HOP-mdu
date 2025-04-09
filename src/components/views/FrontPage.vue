<!-- Hele forsiden – kalder fx BaseHero, produktgrid -->


<script setup lang="ts">
import BaseHero from '~/components/base/BaseHero.vue';
import BaseButton from '~/components/base/BaseButton.vue';

defineProps<{
  data: {
    heroList: {
      content: {
        heroHeading: string;
        heroSubHeading: string;
        heroCallToAction: {
          name: string;
          url: string;
        }[];
      };
    }[];
  };
}>();
</script>

<template>
  <section v-if="data.heroList.length">
    <BaseHero
      :heading="data.heroList[0].content.heroHeading"
      :subheading="data.heroList[0].content.heroSubHeading"
    />

    <div class="mt-4 flex gap-4 justify-center">
      <BaseButton
        v-for="(btn, index) in data.heroList[0].content.heroCallToAction"
        :key="index"
        :label="btn.name || 'Link'"
        :url="btn.url"
      />
    </div>
  </section>
</template>
