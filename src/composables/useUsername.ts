import { useAuthStore } from "#imports";


export function useUsername() {
  const auth = useAuthStore(); 
    return computed(() => auth.user?.userName || '')  
}