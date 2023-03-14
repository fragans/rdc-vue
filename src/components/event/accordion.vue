<template>
  <div class="py-4 px-2 bg-white rounded-xl shadow-lg mb-4">
    <div class="accordion-title flex justify-between px-4" @click="isExpanded = !isExpanded">
      <span class="capitalize text-lg font-bold">
        {{ title  }}
      </span>
      <button class="px-2 font-bold">
        <span v-show="isExpanded">
          <b-icon-chevron-up class="text-xl font-bold text-gray-600" />
        </span>
        <span v-show="!isExpanded">
          <b-icon-chevron-down class="text-xl font-bold text-gray-600" />
        </span>
      </button>
    </div>
    <transition name="slide-bottom" mode="out-in">
      <div v-if="isExpanded" class="px-2 pb-2 pt-4">
        <slot name="content"></slot>  
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'EventAccordion',
  props:['title'],
  data() {
    return {
      isExpanded: true
    }
  }
}
</script>

<style>

</style>