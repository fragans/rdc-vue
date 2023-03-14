<template>
  <div class="flex flex-col gap-4">
    <div class="maps-embed flex justify-center h-[350px]" v-html="hotel.gmaps" />
    <div class="flex flex-col gap-2 text-center">
      <p class="font-bold">{{ hotel.name }}</p>
      <p>{{ hotel.street }}</p>
    </div>
    <div class="pt-4 flex">
      <a :href="hotel.direction" target="_blank" class="flex items-center justify-center w-full bg-blue-400 text-white text-center font-bold rounded-lg py-2">
        <span class="pr-3">
          Lihat Google Map  
        </span>
        <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
      </a>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'EventHotel',
  props: ['hotel']
}
</script>
