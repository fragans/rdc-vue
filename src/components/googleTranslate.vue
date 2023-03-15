<template>
  <div @click="deploy" class="fixed top-[20%] cursor-pointer flex justify-center items-center right-0 rounded-l-full text-white bg-gray-800 w-14 h-14 opacity-50">
  <teleport to="body">
    <div id="google_translate_element" class="fixed bottom-0 right-0  bg-white w-full"></div>
  </teleport>
    <span>
      <font-awesome-icon icon="fa-solid fa-language" size="2xl"   />
    </span>
  </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
export default {
  name: 'GoogleTranslate',
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  methods: {
    deploy(){
      // eslint-disable-next-line no-undef
      new google.translate.TranslateElement(
        {
          pageLanguage: 'id',
          // eslint-disable-next-line no-undef
          layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
        },
        'google_translate_element');
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
  @apply flex justify-between border border-gray-300;
  padding: 16px;
  width: 100%;
}
/* .skiptranslate.goog-te-gadget > span{
  display:none
} */

</style>