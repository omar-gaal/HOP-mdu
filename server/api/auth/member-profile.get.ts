export default defineEventHandler(async (event) => {
    try {
      const response = await $fetch('https://app-cshf-umbraco.azurewebsites.net/api/member-profile', {
        method: 'GET',
        credentials: 'include',
        headers: getHeaders(event)
      });
  
      return response;
    } catch (error) {
      console.error('Proxy member-profile error:', error);
      throw createError({ statusCode: 500, message: 'Proxy member-profile failed' });
    }
  });
  
  function getHeaders(event: any) {
    const cookie = getHeader(event, 'cookie');
    return cookie ? { cookie } : {};
  }