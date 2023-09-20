<script setup>
import { RouterView } from 'vue-router'
import BrandingFooter from './components/branding/footer.vue'
import BrandingHeader from './components/branding/HeaderDefault.vue'
import GoogleTranslate from './components/googleTranslate.vue'
</script>

<template>
  <div class="min-h-screen w-full md:pt-[160px] pt-[72px]">
    <Suspense>
      <BrandingHeader />
    </Suspense>
    <Suspense>
      
      <RouterView v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <div :key="route.name"> 
            <component :is="Component" />
          </div>
        </transition>
      </RouterView>
      
      <!-- <div class="min-h-screen w-full">
        loading..  
      </div> -->
      
    </Suspense>
    
  
    <teleport to="#app">
      <google-translate />
    </teleport>
    <branding-footer />
  </div>
</template>
