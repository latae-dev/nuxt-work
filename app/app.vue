<template>
  <UApp>
    <div :class="{ 'dark': colorMode.value === 'dark' }">
      <ScrollProgressBar />
      <NuxtPage />
    </div>
  </UApp>
</template>

<script setup>
const colorMode = useColorMode()
</script>