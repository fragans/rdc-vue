<script setup>
import { RouterView } from 'vue-router'
import BrandingFooter from './components/branding/footer.vue'
// import BrandingHeader from './components/branding/header.vue'
</script>

<template>
  <!-- <branding-header /> -->
  <Suspense>
    <RouterView />
  </Suspense>
  <branding-footer />
</template>
