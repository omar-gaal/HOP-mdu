export default defineEventHandler(async (event) => {
    try {
      const response = await $fetch('https://app-cshf-umbraco.azurewebsites.net/api/member-profile/log-out', {
        method: 'POST',
        credentials: 'include',
      });
  
      return response
    } catch (error) {
      console.error('Proxy logout error:', error);
      throw createError({ statusCode: 500, message: 'Proxy logout failed' })
    }
  })
  