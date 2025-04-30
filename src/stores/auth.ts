import { defineStore } from "pinia";

// {
//   "name": "Omar Gaal",
//   "email": "omar@example.com",
//   "userName": "oog",
//   "password": "Omar123456"
// }


interface User {
  id: string;
  email: string;
  name: string;
  userName: string; 
}

interface Member {
  key: string; 
  name: string;
  email: string;
  userName: string;
}

interface LoginResponse {
  token: string;
  member: Member;
}

interface CheckAuthResponse  {
  key: string;
  email: string;
  name: string;
  userName: string
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
    init() {
      const authUser = useCookie('authUser', { maxAge: 60 * 60 * 24 * 7 });

      try {
        if (authUser.value) {
          this.user = JSON.parse(authUser.value);
          this.isAuthenticated = true;  
        } 
      } catch(error) {
        console.log('Invalid cookie data', error)
        authUser.value = null
      }

    },

    setUser(user: User) {
      this.user = user;
      this.isAuthenticated = true;
      const authUser = useCookie('authUser');
      authUser.value = JSON.stringify(user)
    },

    setToken(token: string) {
      this.token = token;
    },

    clearAuth() {
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;

      const authUser = useCookie('authUser')
      authUser.value = null;

      const authToken = useCookie('auth')
      authToken.value = null 
    },

    async login(email: string, password: string) {
      try {
        const response: LoginResponse  = await $fetch('https://app-cshf-umbraco.azurewebsites.net/api/member-profile/log-in', {
          method: 'POST',
          body: { userName: email, password },
        });
    
        const authToken = useCookie('auth')
        if(response) {
          authToken.value = response.token;
        }
        console.log('login response:', response.member);
        this.setUser({
          id: response.member.key,
          email: response.member.email,
          name: response.member.name,
          userName: response.member.userName,
        });
    
        return true;
      } catch (error) {
        console.error('login error:', error);
        return false;
      }
    },
    //   try {
    //     await $fetch('https://app-cshf-umbraco.azurewebsites.net/api/member-profile/log-in', {
    //       method: 'POST',
    //       body: { userName: email, password },
    //     });
    
        
    //     return await this.checkAuth();
    //   } catch (error) {
    //     console.error('login error:', error);
    //     return false;
    //   }
    // },

    async signup(name: string, email: string, userName: string, password: string) {
      try {
        const response = await $fetch('https://app-cshf-umbraco.azurewebsites.net/api/members', {
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
        const response: CheckAuthResponse  = await $fetch('https://app-cshf-umbraco.azurewebsites.net/api/member-profile/is-logged-in', {
          method: 'GET',
          credentials: 'include',
        });

        this.setUser({
          id: response.key,
          email: response.email,
          name: response.name,
          userName: response.userName,
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
  }
});




if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
