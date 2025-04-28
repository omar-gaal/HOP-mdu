import { defineStore } from "pinia";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
    isAuthenticated: false,
    loading: true,
  }),

  actions: {
    setUser(user: User) {
      this.user = user;
      this.isAuthenticated = true;
    },

    setToken(token: string) {
      this.token = token;
     
    },

    clearAuth() {
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;
    },

    async login(email: string, password: string) {
      try {
        const response = await $fetch('/api/member-profile/log-in', {
          method: 'POST',
          body: { userName: email, password },
          credentials: 'include', 
        });
       await this.checkAuth()
       return true;
      } catch (error) {
        console.error('login error:', error);
        return false;
      }
    },

    async signup(name: string, email: string, password: string) {
      try {
        const response = await $fetch('/api/members', {
          method: 'POST',
          body: { name, email, userName: email, password },
          credentials: 'include',
        });
       await this.checkAuth()
        return { success: true };
      } catch (error: any) {
        return {
          success: false,
          error: error.data?.message || 'Signup failed',
        };
      }
    },




    async logout() {
      try {
        await $fetch('/api/member-profile/log-out', {
          method: 'POST',
          credentials: 'include',
        });
      } finally {
        this.clearAuth();
        await navigateTo('/');
      }
    },





    async checkAuth() {
      try {
        const response = await $fetch('/api/member-profile', {
          method: 'GET',
          credentials: 'include',
        });
    
        this.setUser({
          id: response.key,
          email: response.email,
          name: response.userName,
        });
        this.isAuthenticated = true;
        return true; 
      } catch {
        this.clearAuth();
        return false;
      } finally {
        this.loading = false;
      }
    }




  },


});



if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
