<script setup lang="ts">
import useContentApi from '~/composables/useContentApi';
import FrontPage from '~/components/views/FrontPage.vue';

const { getContent } = useContentApi();



const { data, pending, error } = await useAsyncData(() =>
  getContent('https://novicell-umbraco.ditnyewebsite.dk/da')
);
</script>

<template>
  <div class="p-6">
    <div v-if="pending">Loading content...</div>

    <div v-else-if="error">
      <p>Something went wrong </p>
      <pre>{{ error }}</pre>
    </div>

    <div v-else>
      <FrontPage :data="data.content" />
      <hr class="my-8" />
      <h2 class="text-lg font-bold mb-2">Raw JSON below </h2>
      <pre>{{ data }}</pre>

      
      <div v-for="block in data.content.blocks" :key="block.headline">
        <div v-if="block.type === 'hero'">
          <h2>{{ block.headline }}</h2>
          <p>{{ block.description }}</p>
          <img :src="block.image.url" :alt="block.image.name" />
          <a :href="block.cta.url">{{ block.cta.name }}</a>
        </div>
        <div v-else-if="block.type === 'textWithImage'">
          <h2>{{ block.headline }}</h2>
          <p>{{ block.description }}</p>
          <img :src="block.image.url" :alt="block.image.name" />
          <p v-html="block.text"></p>
        </div>
        <div v-else-if="block.type === 'twoColumnText'">
          <div class="grid grid-cols-2 gap-4">
            <div v-html="block.leftColumn"></div>
            <div v-html="block.rightColumn"></div>
          </div>
        </div>
        <div v-else-if="block.type === 'video'">
          <video controls :src="block.videoUrl">
            <source :src="block.videoUrl" type="video/mp4" />
          </video>
          <h2>{{ block.headline }}</h2>
          <p>{{ block.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
