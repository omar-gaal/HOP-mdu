import { useAuthStore } from "#imports"
export default defineNuxtRouteMiddleware(async(to, from) => {
  const auth = useAuthStore();

  if (auth.loading) {
    await new Promise(resolve => {
      const stop = watch(
        () => auth.loading,
        (loading) => {
          if (!loading) {
            stop();
            resolve(true);
          }
        }
      );
    });
  }

  if (!auth.isAuthenticated) {
    return navigateTo('/');
  }
});