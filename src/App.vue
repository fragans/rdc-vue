<script setup>
import { RouterView } from 'vue-router'
import BrandingFooter from './components/branding/footer.vue'
import GoogleTranslate from './components/googleTranslate.vue'
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
      <google-translate />
    </teleport>
    <branding-footer />
  </div>
</template>
