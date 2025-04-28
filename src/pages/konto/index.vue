<script setup lang="ts">
// definePageMeta({
//   middleware: 'protected',
// });

import BaseInfoCard from '@/components/base/BaseInfoCard.vue'

interface DetailItem {
  id: number;
  name: string;
  mail: string;
  number: number;
}

interface AddressItem {
  street: string;
  postNr: number;
  city: string;
  country: string;
}

const userDetail = ref<DetailItem[]>([
  { 
    id: 1,
    name: 'Omar Gaal',
    mail: 'omargaal123@gmail.com',
    number: 4560635399,
  }
]);

const userAddress = ref<AddressItem[]>([
  { 
    street: 'Frydenlunds alle nr 35 1tv',
    postNr: 8210,
    city: 'Aarhus',
    country: 'Denmark',
  }
]);
</script>

<template>
<BaseContainer :is-mypage="true">

  <div class="flex justify-between py-8 ">
    <h2 class="text-2xl">Hej Omar</h2>
    <h2 class="underline text-2xl">Log ud</h2>
  </div>

  <PartialAccountNavigation class="mb-24"/>

  <div class="flex flex-col gap-6  sm:flex-row sm:justify-between">
    <BaseInfoCard
      title="Mine detaljer"
      :content="[
        userDetail[0].name,
        userDetail[0].mail,
        '+' + userDetail[0].number
      ]"
      linkText="Rediger"
      linkUrl="/konto/profile"
    />

    <BaseInfoCard
      title="Adresse"
      :content="[
        userAddress[0].street,
        `${userAddress[0].postNr} ${userAddress[0].city}`,
        userAddress[0].country
      ]"
      linkText="Opdater adresse"
      linkUrl="/konto/profile"
    />
  </div>

</BaseContainer>
</template>
