import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profile', {
  state: () => ({
    name: '',
    username: '',
    email: '',
    adresse: '',
    postNr: '',
    by: '',
    land: '',
  }),
  actions: {
    loadFromLocalStorage() {
      const stored = localStorage.getItem('userProfile');
      if (stored) {
        Object.assign(this, JSON.parse(stored));
      }
    },
    saveToLocalStorage() {
      localStorage.setItem('userProfile', JSON.stringify({ 
        name: this.name,
        username: this.username,
        email: this.email,
        adresse: this.adresse,
        postNr: this.postNr,
        by: this.by,
        land: this.land,
      }));
    }
  }
});
