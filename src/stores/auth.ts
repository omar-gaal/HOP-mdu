import { defineStore } from "pinia";


// Define the types for the user and related data
interface User {
  key: string;
  email: string;
  name: string;
  userName: string;
  
}

interface LoginResponse {
  token: string;
  member: User;
}

interface CheckAuthResponse {
  key: string;
  email: string;
  name: string;
  userName: string;
}

interface AuthState {
  user: User | null ;
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
    init(): Promise<void> {
      return new Promise((resolve) => {
        const authUser = useCookie('authUser');
        const authToken = useCookie('auth');
    
        try {
          if (authUser.value) {
            this.user = authUser.value as unknown as User;
            this.isAuthenticated = true;
          }
    
          if (authToken.value) {
            this.token = authToken.value;
          }
        } catch (error) {
          console.error('Invalid cookie format', error);
          this.clearAuth();
        }
    
        this.loading = false;
        resolve();
      });
    },

   
    setUser(user: User) {
      this.user = user;
      this.isAuthenticated = true;
      const authUser = useCookie('authUser',{maxAge: 60 * 60 * 24 * 7});
      authUser.value = JSON.stringify(user);
    },

    // This method saves the token to the cookie
    setToken(token: string) {
      this.token = token;
      const authToken = useCookie('auth', {maxAge: 60 * 60 * 24 * 7});
      authToken.value = token;
    },

    // This method clears user data and token from both store and cookies
    clearAuth() {
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;

      const authUser = useCookie('authUser');
      const authToken = useCookie('auth');
      authUser.value = null;
      authToken.value = null;
    },

    // Login method that calls the backend API and handles the response
    async login(userName: string, password: string) {
      try {
        const response: LoginResponse = await $fetch('https://app-cshf-umbraco.azurewebsites.net/api/member-profile/log-in', {
          method: 'POST',
          body: { userName, password },
        });


        if (response && response.token) {
          const authToken = useCookie('auth');
          authToken.value = response.token;

          // Save the user data and set it in the store
          this.setUser({
            key: response.member.key,
            email: response.member.email,
            name: response.member.name,
            userName: response.member.userName,
          });

          return true;
        } else {
          throw new Error('Login failed: No response or token received');
        }
      } catch (error) {
        console.error('Login error:', error);
        throw error;  // Rethrow the error for handling higher up
      }
    },

    // Signup method to register a new user
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

    // Logout method that logs the user out and clears the authentication state
    async logout() {
      try {
        await $fetch('https://app-cshf-umbraco.azurewebsites.net/api/member-profile/log-out', {
          method: 'POST',
          credentials: 'include',
        });
      } catch (error) {
        console.error('Proxy logout error:', error);
        throw createError({ statusCode: 500, message: 'Proxy logout failed' });
      } finally {
        this.clearAuth();
  
        const favoriter = useFavoritesStore();  
        favoriter.clearFavorites();  
        await navigateTo('/');
      }
    },

    // Check the authentication status by verifying the token
    async checkAuth() {
      try {
        const tokenCookie = useCookie('auth');  // Use 'auth' for token retrieval
        const response: CheckAuthResponse = await $fetch('https://app-cshf-umbraco.azurewebsites.net/api/member-profile/is-logged-in', {
          method: 'GET',
          credentials: 'include',
          headers: {
            Authorization: `Bearer ${tokenCookie.value}`,
          },
        });

        console.log(response);

        // Set user information if the user is authenticated
        this.setUser({
          key: response.key,
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
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
