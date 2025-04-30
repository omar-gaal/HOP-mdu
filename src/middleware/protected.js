import { useAuthStore } from "#imports"
export default defineNuxtRouteMiddleware(async (to) => {
    if (!useAuthStore) {
      return navigateTo('/')
    }
  })