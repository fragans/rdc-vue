<template>
  <div :class="[isGoingDown ? 'lg:hidden flex' : 'flex']" class="fixed top-2 cursor-pointer  justify-center items-center right-6 rounded-lg text-white bg-amber-400 w-auto h-14 z-30">
    <transition mode="out-in" name="shrink" appear>
      <div id="google_translate_element" class=""></div>
    </transition>

    <transition mode="out-in" name="shrink" appear>
      <div v-show="!isDeployed">
        <span class="px-4" @click="deploy()">
          <font-awesome-icon icon="fa-solid fa-language" size="2xl"   />
        </span>
      </div>
    </transition>
  </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
import { useHead } from "@unhead/vue"
import { useScroll } from '@/composables/useScroll'
import { ref } from "vue"
export default {
  name: 'GoogleTranslate',
  setup() {
    useHead({
      script: [
        {
          hid: 'google-translate',
          src: '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit',
          async: true,
          onload: async ()=> {
            setInterval(()=> {
              // eslint-disable-next-line no-undef
              // new google.translate.TranslateElement(
              //   {
              //     pageLanguage: 'id',
              //     // eslint-disable-next-line no-undef
              //     layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL
              //   },
              //   'google_translate_element')
            }, 1500)
            
          }
        }
      ]
    }, { mode: 'client' })

    const { cookies } = useCookies();
    const isDeployed = ref(false)
    const { isGoingDown } = useScroll()

    return {isDeployed, cookies, isGoingDown}
  },
  methods: {
    async deploy(){
      
      await setTimeout(()=> {
        // eslint-disable-next-line no-undef
        new google.translate.TranslateElement(
          {
            pageLanguage: 'id',
            // eslint-disable-next-line no-undef
            layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
          },
          'google_translate_element');
          this.isDeployed = true
      },500)
      
    }
  },
  mounted(){
    // const value = decodeURIComponent("/id/en".replace(/\+/g,  " "))
    // this.cookies.set('googtrans', value);
  }
}
</script>

<style lang="postcss">
.skiptranslate.goog-te-gadget {
  @apply flex justify-between gap-2 px-4 py-2;
  width: 100%;
  font-size: 0;
}
select {
  @apply font-semibold;
  outline: 0;
  background: transparent;
  border:0!important;
  font-size: 1rem!important;
  color: #333!important;
}
.skiptranslate.goog-te-gadget > span{
  display:none
}
.skiptranslate.goog-te-gadget > span > a{
  display:none;
  width: 0px;
}
</style>