// stores/modal.ts
import { defineStore } from 'pinia'

export const useModal = defineStore('modal', () => {
  const isOpen = shallowRef<boolean>(true);
  
  function close () {
   isOpen.value = false;

  }
  function open () {
    isOpen.value = true;
 
   }

  return {
    isOpen,
    close,
    open
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useModal, import.meta.hot));
}




