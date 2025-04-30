export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.name || !body.email || !body.userName || !body.password) {
    throw createError({
      statusCode: 400,
      message: 'Missing required fields'
    });
  }

  const response = await $fetch('https://app-cshf-umbraco.azurewebsites.net/api/members', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include', 
    body: JSON.stringify(body) 
  });

  return response;
});