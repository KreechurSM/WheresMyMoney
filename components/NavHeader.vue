<template>
  <v-app-bar scroll-behavior="hide" flat class="px-8 opacity-90">
    <v-app-bar-title data-aos="fade-down" clas>
      <v-icon color="primary">mdi-currency-eur</v-icon>
      <NuxtLink to="/" style="text-decoration: none;"><span class="text-h6 title text-align-center">Wheres My
          Money</span></NuxtLink>
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn icon="mdi-theme-light-dark" variant="text" color="primary" @click="() => toggleTheme()"></v-btn>
      <v-menu location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-menu" variant="text" color="primary" v-bind="props">
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from 'vue';

import { useCustomTheme } from '~/composables/useCustomTheme';

const items = [
  { title: 'Sign In' },
  { title: 'Settings' },
]

const theme = useCustomTheme();

const toggleTheme = () => {
  theme.toggle();
  console.dir(`Toggle Theem`)
}

onMounted(() => {
  AOS.init();
})
</script>

<style scoped>
#NavWrapper {
  height: 30px;
}
</style>