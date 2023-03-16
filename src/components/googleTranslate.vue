<template>
  <div @click="deploy" class="fixed top-6 cursor-pointer flex justify-center items-center right-6 rounded-lg text-white bg-amber-400 w-auto h-14 shadow-lg">
    <transition mode="out-in" name="shrink">
      <div id="google_translate_element" class=""></div>
    </transition>

    <transition mode="out-in" name="shrink">
      <div v-show="!isDeployed">
        <span class="px-4">
          <font-awesome-icon icon="fa-solid fa-language" size="2xl"   />
        </span>
      </div>
    </transition>
  </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
import { ref } from "vue"
export default {
  name: 'GoogleTranslate',
  setup() {
    const { cookies } = useCookies();
    const isDeployed = ref(false)
    return {isDeployed, cookies}
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
      },500)
      this.isDeployed = true
      
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