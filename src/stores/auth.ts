import { defineStore } from "pinia";

// {
//   "name": "Omar Gaal",
//   "email": "omar@example.com",
//   "userName": "oog",
//   "password": "Password123!"
// }


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
        const response = await $fetch('/api/auth/login', {
          method: 'POST',
          body: { userName: email, password },
        });
        await this.checkAuth()
        return true;
      } catch (error) {
        console.error('login error:', error);
        return false;
      }
    },
    async signup(name: string, email: string, userName: string, password: string) {
      try {
        const response = await $fetch('/api/auth/signup', {
          method: 'POST',
          body: { name, email, userName, password },
        });
        await this.checkAuth();
        return { success: true };
      } catch (error: any) {
        console.error('Signup error:', error);
        return {
          success: false,
          error: error?.data?.message || error?.message || 'Signup failed',
        };
      }
    },




    async logout() {
      try {
        await $fetch('/api/auth/logout', { method: 'POST' });
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
          name: response.name,
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
