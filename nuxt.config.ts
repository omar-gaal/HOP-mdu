export default defineNuxtConfig({

  srcDir: 'src/',
  runtimeConfig: {
   
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      frontendBase: process.env.NUXT_PUBLIC_FRONTEND_BASE,
      
    }
  },


  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/image'],
  compatibilityDate: '2025-03-23'
});