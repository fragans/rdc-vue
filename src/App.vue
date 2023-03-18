<script setup>
// import { ref } from 'vue'
// import { onMounted } from 'vue'
// import { useMeta } from 'vue-meta'
import { RouterView } from 'vue-router'
import BrandingFooter from './components/branding/footer.vue'
import GoogleTranslate from './components/googleTranslate.vue'
// const defaultMetaTitle  = ref('RDC.com')

// let googleTranslate = document.createElement('script')
// googleTranslate.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit')
// document.head.appendChild(googleTranslate)
    

// let gtIsReady = false

// let checkInterval = setInterval(function () {
//       // eslint-disable-next-line no-undef
//       if (google) {
//         gtIsReady = true;
//         clearInterval(checkInterval)
//         // eslint-disable-next-line no-undef
//         google.ready(function () {
//           // eslint-disable-next-line no-undef
//           new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element')
//         });
//       }
//       return gtIsReady;
//     }, 500);
// import BrandingHeader from './components/branding/header.vue'
</script>

<template>
  <div class="min-h-screen w-full">
    <!-- <branding-header /> -->
    <Suspense>
      <template #default>
        <RouterView />  
      </template>
      <template #fallback>
        <div class="min-h-screen w-full">
          loading..  
        </div>
        
      </template>
    </Suspense>
    
  
    <teleport to="#app">
      <google-translate class="" />
    </teleport>
    <branding-footer />
  </div>
</template>
