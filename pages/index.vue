<template>
  <section id="Landing" class="d-flex w-100 flex-column">
    <section id="hero" data-aos="zoom-out" class="d-flex w-100 align-center" style="height: 75vh">
      <HeroSection></HeroSection>
    </section>
    <section id="input-section" data-aos="zoom-out">
      <LandingInput></LandingInput>
    </section>

    <faq-section data-aos="fade-up"></faq-section>
  </section>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from 'vue';
import LandingInput from '~/components/LandingInput.vue';

onMounted(() => {
  AOS.init();
})
</script>