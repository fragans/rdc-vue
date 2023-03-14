<template>
  <div class="py-4 px-2 bg-white rounded-xl shadow-lg mb-4">
    <div class="accordion-title flex justify-between px-4 cursor-pointer" @click="isExpanded = !isExpanded">
      <span class="capitalize text-lg font-bold select-none">
        {{ title  }}
      </span>
      <button class="px-2 font-bold">
        <span v-show="isExpanded">
          <font-awesome-icon icon="fa-solid fa-chevron-up" />
        </span>
        <span v-show="!isExpanded">
          <font-awesome-icon icon="fa-solid fa-chevron-down" />
        </span>
      </button>
    </div>
    <div v-if="isExpanded" class="px-2 pb-2 pt-4">
      <slot name="content"></slot>  
    </div>
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