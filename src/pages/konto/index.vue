<script setup lang="ts">
definePageMeta({
  middleware: "protected",
});

// Imports
import BaseInfoCard from "@/components/base/BaseInfoCard.vue";
import { useAuthStore, useUsername } from "#imports";
import { useProfileStore } from "@/stores/useProfileStore";

// Stores
const auth = useAuthStore();
const profileStore = useProfileStore();
const userName = useUsername();

// Logout handler
const logout = async () => {
  await auth.logout();
};
</script>

<template>
<BaseContainer :is-mypage="true">
  <div class="flex justify-between py-8 ">
    <h2 class="text-2xl">Hej {{userName || 'Bruger'}}</h2>
    <button @click="logout" class="text-2xl underline" >Log ud </button>
  </div>
  <PartialAccountNavigation class="mb-24"/>
  <div class="flex flex-col gap-6  sm:flex-row sm:justify-between">
    <BaseInfoCard
       :title="'Mine detaljer'"
       :userName="userName"
       :email="auth.user?.email"
       :text="'hej med dig'"
       linkText="Mine detaljer"
       linkUrl="/konto/profile"
    />
    <BaseInfoCard
  title="Mine oplysninger"
  :userName="profileStore.name"
  :email="profileStore.email"
  :adresse="profileStore.adresse"
  :postNr="profileStore.postNr"
  :by="profileStore.by"
  :land="profileStore.land"
  linkText="Rediger"
  linkUrl="/profile"
/>
  </div>
</BaseContainer>
</template>
