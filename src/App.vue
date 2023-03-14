<script setup>
// import { ref } from 'vue'
import { RouterView } from 'vue-router'
import BrandingFooter from './components/branding/footer.vue'
// const defaultMetaTitle  = ref('RDC.com')

// import BrandingHeader from './components/branding/header.vue'
</script>

<template>
  <!-- <branding-header /> -->
  <!-- <teleport to="head">
    <title>{{ defaultMetaTitle }}</title>
  </teleport> -->
  <Suspense>
    <RouterView />
  </Suspense>
  <branding-footer />
</template>
