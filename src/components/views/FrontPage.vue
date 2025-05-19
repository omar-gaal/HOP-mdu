<script setup lang="ts">
import BaseHero from "~/components/base/BaseHero.vue";
import ProductList from "~/components/partial/ProductList.vue";

import PartialLoginForm from "@/components/partial/LoginForm.vue";
import PartialCreateForm from "@/components/partial/CreateForm.vue";
import LoadingMessage from "@/components/partial/LoadingMessage.vue";
import ForgotPasswordForm from "@/components/partial/ForgotPasswordForm.vue";
import SuccessMessage from "@/components/partial/successMessage.vue";
import { useModal } from "@/stores/modal";
import { useFavoritesStore } from "#imports";
import { productData } from "~/data/productData";

const modal = useModal();
const favorites = useFavoritesStore();
</script>



<template>
  <main>
  <h1>hello from clean up branch </h1>
    <BaseContainer :fullWidth="false">
      <BaseHero />
      <!-- (Din login knap ligger sikkert her) -->
    </BaseContainer>

    <BaseModal>
      <PartialLoginForm v-if="modal.activeForm === 'login'" />
      <PartialCreateForm v-else-if="modal.activeForm === 'create'" />
      <LoadingMessage v-else-if="modal.activeForm === 'loading'" />
      <SuccessMessage v-else-if="modal.activeForm === 'success'" />
      <ForgotPasswordForm v-else-if="modal.activeForm === 'forgot'" />
    </BaseModal>

    <BaseContainer :isFrontpage="true">
      <section class="bg-white w-full py-6">
        <ProductList :products="productData" :favorites="favorites" />
      </section>
    </BaseContainer>
  </main>
</template>
