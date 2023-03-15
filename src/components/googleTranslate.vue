<template>
  <div @click="deploy" class="fixed bottom-3 flex justify-center items-center right-0 rounded-l-full text-white bg-gray-800 w-14 h-14 opacity-50">
    <span>
      <font-awesome-icon icon="fa-solid fa-language" size="2xl"   />
    </span>
  </div>
</template>

<script>
export default {
  name: 'GoogleTranslate',
  methods: {
    deploy(){
      // eslint-disable-next-line no-undef
      new google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          // eslint-disable-next-line no-undef
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element');
    }
  }
}
</script>

<style>

</style>