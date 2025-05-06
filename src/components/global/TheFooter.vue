<script setup lang="ts">
const footerLinks = [
  {
    title: "Kundeservice",
    links: [
      "Mandag 10:00 - 17:00",
      "Tirsdag 10:00 - 17:00",
      "Onsdag 10:00 - 17:00",
      "Torsdag 10:00 - 17:00",
    ],
  },
  {
    title: "Om TechTing",
    links: [
      "Email: TechT@gmail.dk ",
      "Kontakt: 22 33 44 33",
      "Adresse: Engdahlsvej 1",
      "TechTing A/S",
    ],
  },
  {
    title: "Følg os",
    links: ["Facebook", "Instagram", "Twitter"],
  },
];
</script>

<template>
  <footer class="bg-primary text-white py-10 px-6">
    <div
      class="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between gap-10"
    >
      <div
        class="flex flex-col items-center md:items-start text-center md:text-left gap-3"
      >
        <img src="../../assets/icon/logo.webp" alt="logo" class="w-36" />
        <span class="text-sm text-gray-300">©2025 company A/S</span>
        <a href="/" class="underline text-sm hover:opacity-80"
          >Cookie indstillinger</a
        >
        <a href="/" class="underline text-sm hover:opacity-80">Privatpolitik</a>
      </div>

      <div class="flex flex-col md:flex-row gap-64 text-center md:text-left">
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
