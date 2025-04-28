<script setup lang="ts">
import BaseHero from "~/components/base/BaseHero.vue";
import { useModal } from "@/stores/modal";
import PartialLoginForm from "@/components/partial/LoginForm.vue";
import PartialCreateForm from "@/components/partial/CreateForm.vue";
import LoadingMessage from "@/components/partial/LoadingMessage.vue";
import SuccessMessage from "@/components/partial/successMessage.vue";
import ForgotPasswordForm from "@/components/partial/ForgotPasswordForm.vue";
const modal = useModal();
</script>

<template>
  <main>
    <BaseContainer :fullWidth="false">
      <BaseHero />
      <!-- (Din login knap ligger sikkert her) -->
    </BaseContainer>
    <section class="bg-white w-full py-6">
      <PartialProductCard />
    </section>
    <BaseModal>
      <PartialLoginForm v-if="modal.activeForm === 'login'" />
      <PartialCreateForm v-else-if="modal.activeForm === 'create'" />
      <LoadingMessage v-else-if="modal.activeForm === 'loading'" />
      <SuccessMessage v-else-if="modal.activeForm === 'success'" />
      <ForgotPasswordForm v-else-if="modal.activeForm === 'forgot'" />
    </BaseModal>

    <BaseContainer>
      <section class="bg-white w-full py-6">
        <!-- Eventuelt flere ting -->
      </section>
    </BaseContainer>
  </main>
</template>
