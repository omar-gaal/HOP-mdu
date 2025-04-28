import { defineStore } from "pinia";
import { shallowRef } from "vue";
import LoadingMessage from "@/components/partial/LoadingMessage.vue";

export const useModal = defineStore("modal", () => {
  const isOpen = shallowRef(false);
  const activeForm = shallowRef<
    "login" | "create" | "loading" | "success" | "forgot" | "reset-success" | null
  >(null);
  

  function open(form: "login" | "create") { activeForm.value = form; isOpen.value = true;}

  function setForm(form: "login" | "create" | "loading" | "success" | "forgot" | "reset-success" | null) {
    activeForm.value = form;
  }

  function close() {
    isOpen.value = false;
    activeForm.value = null;
  }

  return { isOpen, activeForm, open, setForm, close };

});
