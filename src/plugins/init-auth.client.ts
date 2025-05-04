import { useAuthStore } from '#imports';

export default defineNuxtPlugin(async (nuxtApp) => {
  const auth = useAuthStore();

  // Ensure this runs on both client/server BEFORE navigation
  nuxtApp.hook('app:created', async () => {
    await auth.init();
  });
});