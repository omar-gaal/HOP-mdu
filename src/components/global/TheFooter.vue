<script setup lang="ts">

const footerLinks = [
  {
    title: 'Kundeservice',
    links: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum']
  },
  {
    title: 'Om (company-name)',
    links: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum']
  },
  {
    title: 'Tilbud',
    links: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum']
  }
]
</script>

<template>
  <footer class="bg-primary text-white py-10 px-6">
    <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-evenly gap-10">

      <div class="flex flex-col items-center md:items-start text-center md:text-left gap-3">
        <img src="../../assets/icon/logo.webp" alt="logo" class="w-28" />
        <span class="text-sm text-gray-300">©2025 company A/S</span>
        <a href="/" class="underline text-sm hover:opacity-80">Cookie indstillinger</a>
        <a href="/" class="underline text-sm hover:opacity-80">Privatpolitik</a>
      </div>

      <div class="flex flex-col md:flex-row gap-10 text-center md:text-left">
        <div v-for="section in footerLinks" :key="section.title">
          <h3 class="font-semibold mb-2">{{ section.title }}</h3>
          <ul class="space-y-1 text-sm text-gray-300">
            <li v-for="link in section.links" :key="link">{{ link }}</li>
          </ul>
        </div>
      </div>

    </div>
  </footer>
</template>
