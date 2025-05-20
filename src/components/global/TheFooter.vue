<script setup lang="ts">
const footerLinks = [
  {
    title: "Kundeservice",
    links: [
      { text: "Mandag 10:00 - 17:00", url: "#" },
      { text: "Tirsdag 10:00 - 17:00", url: "#" },
      { text: "Onsdag 10:00 - 17:00", url: "#" },
      { text: "Torsdag 10:00 - 17:00", url: "#" },
    ],
  },
  {
    title: "Om TechTing",
    links: [
      { text: "Email: TechT@gmail.dk ", url: "https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook" },
      { text: "Kontakt: 22 33 44 33", url: "tel:+4522334433" },
      { text: "Adresse: Engdahlsvej 1", url: "https://www.google.com/maps/place/Engdahlsvej+1,+7400+Herning/@56.135516,9.0051282,17z/data=!3m1!4b1!4m5!3m4!1s0x464bbc1a54f2f727:0x2465df6037492b0d!8m2!3d56.135513!4d9.0077031?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D" },
      { text: "TechTing A/S", url: "http://localhost:3000/" },
    ],
  },
  {
    title: "Følg os",
    links: [
      { text: "Facebook", url: "https://www.facebook.com/" },
      { text: "Instagram", url: "https://www.instagram.com/" },
      { text: "X", url: "https://x.com/" },
    ],
  },
];
</script>

<template>
  <footer class="bg-primary text-white py-10 px-6">
    <div
      class="max-w-screen-xl  mx-auto flex flex-col lg:flex-row md:justify-between max-lg:place-items-center gap-14"
    >
      <div
        class="flex flex-col items-center  md:items-start text-center md:text-left gap-5"
      >
        <img src="../../assets/icon/logo.webp" alt="logo" class="w-36" />
        <span class="text-sm text-gray-300">©2025 company A/S</span>
        <a href="/" class="underline text-sm hover:opacity-80"
          >Cookie indstillinger</a
        >
        <a href="/gdpr" class="underline text-sm hover:opacity-80">Privatpolitik</a>
      </div>

      <div class="flex flex-col lg:flex-row gap-44 text-center text-2xl md:text-left">
        <div  v-for="section in footerLinks" :key="section.title">
          <h3 class="font-semibold mb-2">{{ section.title }}</h3>
          <ul class="space-y-1 text-base text-gray-300">
            <li class="p-3 lg:p-1" v-for="link in section.links" :key="link.text">
              <a :href="link.url" class="hover:underline">{{ link.text }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
