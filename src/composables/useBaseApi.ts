import { $fetch } from 'ofetch';
import type { FetchOptions } from 'ofetch';

/**
 * The base API to use for all API calls to Umbraco.
 */
export async function UseBaseApi<T>(path: string, opt: FetchOptions<'json'> = {}) {
  const {
    public: { apiBase }
  } = useRuntimeConfig();
  const headers: HeadersInit = {};

  return await $fetch<T>(path, {
    headers,
    baseURL: apiBase as string,
    cache: 'no-cache',
    keepalive: true,
    ...opt
  });
}
