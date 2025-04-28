<script setup lang="ts">
import BaseHero from "~/components/base/BaseHero.vue";

import { useModal } from "@/stores/modal";
import PartialLoginForm from "@/components/partial/LoginForm.vue";
import PartialCreateForm from "@/components/partial/CreateForm.vue";
import LoadingMessage from "@/components/partial/LoadingMessage.vue";
import SuccessMessage from "@/components/partial/successMessage.vue";
import ForgotPasswordForm from "@/components/partial/ForgotPasswordForm.vue";
const modal = useModal();

import ProductList from '~/components/partial/ProductList.vue'




// all image 
import laptop from '@/assets/img/laptop.webp';
import iphone from '@/assets/img/iphone.webp';
import playstationPro from '@/assets/img/ps5.webp';
import scooter from '@/assets/img/scooter.webp';
import microphone from '@/assets/img/mikrofon.webp';
import kamera from '@/assets/img/kamera.webp';
import hojtaler from '@/assets/img/hojtaler.webp';
import kamera2 from '@/assets/img/kamera2.webp';
import horeboffer from '@/assets/img/horeboffer.webp';


// image card data 
const productData = ([      
  {   
    id: 1,
    image: laptop,
    varenr: 'Varenr. 77777',
    productName: 'X5000 Pro Series',
    price: '3000,00 DKK',
    stock: '37 på lager',
  },
  {
    id: 2,
    image: iphone,
    varenr: 'Varenr. 87765',
    productName: 'Iphone 12 Pro',
    price: '1500,00 DKK',
    stock: '2 på lager',
  },
  {
    id: 3,
    image: playstationPro,
    varenr: 'Varenr. 87778',
    productName: 'Playstation 5 pro',
    price: '2500,00 DKK',
    stock: '20 på lager',
  },
  {
    id: 4,
    image: scooter,
    varenr: 'Varenr. 87765',
    productName: 'El løbehjul',
    price: '2000,00 DKK',
    stock: '5 på lager',
  },
  {
    id: 5,
    image: microphone,
    varenr: 'Varenr. 87765',
    productName: 'El løbehjul',
    price: '2000,00 DKK',
    stock: '5 på lager',
  },
  {
    id: 6,
    image: kamera,
    varenr: 'Varenr. 87774',
    productName: 'Canon Eos 90D',
    price: '999,00 DKK',
    stock: '12 på lager',
  },

  {
    id: 7,
    image: hojtaler,
    varenr: 'Varenr. 87765',
    productName: 'Marshall',
    price: '800,00 DKK',
    stock: '15 på lager',
  },
  {
    id: 8,
    image: kamera2,
    varenr: 'Varenr. 87744',
    productName: 'Nikon D7500',
    price: '15000,00 DKK',
    stock: '5 på lager',
  },
  {
    id: 9,
    image: horeboffer,
    varenr: 'Varenr. 87744',
    productName: 'Nikon D7500',
    price: '15000,00 DKK',
    stock: '5 på lager',
  },

]);


</script>

<template>
  <main>

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
      <ProductList :products="productData" />
    </section>
  </BaseContainer>

  </main>
</template>
