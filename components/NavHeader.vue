<template>
  <v-app-bar scroll-behavior="hide" flat class="px-8 opacity-90">
    <v-app-bar-title data-aos="fade-down" clas>
      <v-icon color="primary">mdi-currency-eur</v-icon>
      <NuxtLink to="/" style="text-decoration: none;"><span class="text-h6 title text-align-center">Wheres My
          Money</span></NuxtLink>
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn icon="mdi-theme-light-dark" variant="text" color="primary" @click="toggleTheme"></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from 'vue';

import { useThemeStore } from '~/stores/theme';

const themeStore = useThemeStore();
const toggleTheme = themeStore.toggleTheme;
const theme = themeStore.theme;

onMounted(() => {
  AOS.init();
})
</script>

<style scoped>
#NavWrapper {
  height: 30px;
}
</style>