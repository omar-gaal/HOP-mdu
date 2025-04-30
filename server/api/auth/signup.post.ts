  export default defineEventHandler(async (event) => {
    const body = await readBody(event)
  
    const response = await $fetch('https://app-cshf-umbraco.azurewebsites.net/api/members', {
      method: 'POST',
      body,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    return response;
  });