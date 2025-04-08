


import type { ContentResponse } from '../types/index';
import { UseBaseApi } from '../composables/useBaseApi';





export default function useContentApi() {
  const getContent = (url: string) => {
    return UseBaseApi('/api/content', {
      params: { url },
      keepalive: true
    });
  };

  return { getContent };
}