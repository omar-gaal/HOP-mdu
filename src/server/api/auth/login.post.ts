export default defineEventHandler(async (event) => {
    try {
      const body = await readBody(event)
  
      const response = await $fetch('https://app-cshf-umbraco.azurewebsites.net/api/member-profile/log-in', {
        method: 'POST',
        body,
        credentials: 'include',
      });
  
      return response
    } catch (error) {
      console.error('Proxy login error:', error);
      throw createError({ statusCode: 500, message: 'Proxy login failed' })
    }
  })