<script setup>
// import { ref } from 'vue'
import { RouterView } from 'vue-router'
import BrandingFooter from './components/branding/footer.vue'
// const defaultMetaTitle  = ref('RDC.com')

let googleTranslate = document.createElement('script')
googleTranslate.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit')
document.head.appendChild(googleTranslate)
    
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
  <div id="google_translate_element"></div>
  <branding-footer />
</template>
