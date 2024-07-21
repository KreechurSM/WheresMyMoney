<template>
  <VApp :theme="isDark ? 'dark' : 'light'">
    <v-layout class="rounded rounded-md">
      <NavHeader></NavHeader>

      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <slot />
      </v-main>

      <!-- <AppFooter /> -->
    </v-layout>
  </VApp>
</template>

<script setup>
import { useCustomTheme } from '~/composables/useCustomTheme.js'

const { isDark } = useCustomTheme();

console.dir(`isDark: ${isDark.value}`)
</script>