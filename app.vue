<template>
  <VApp :theme="isDark ? 'dark' : 'light'">
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </VApp>
</template>

<script setup>
import { useCustomTheme } from '~/composables/useCustomTheme.js'

const { isDark } = useCustomTheme()
</script>
