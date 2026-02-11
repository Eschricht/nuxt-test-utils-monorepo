<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <div>
    <p>{{ $colorMode.value }}</p>
    <slot />
  </div>
</template>
