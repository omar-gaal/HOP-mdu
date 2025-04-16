export default defineNuxtConfig({

  srcDir: 'src/',
  runtimeConfig: {
   
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      frontendBase: process.env.NUXT_PUBLIC_FRONTEND_BASE,
      
    }
  },
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
      Inter: '200..700',
      'Crimson Pro': {
        wght: '200..900',
        ital: '200..700',
      }
    }
  },

  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxt/icon'
  ],
  compatibilityDate: '2025-03-23'
});