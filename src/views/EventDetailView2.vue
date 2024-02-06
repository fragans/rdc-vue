<template>
  <div class="max-w-4xl mx-auto bg-gray-100 min-h-screen">
    <div class="event-thumbnail bg-cover bg-center bg-gray-300" style="padding-bottom: 141%;" :style="backgroundImage" />
  
    <div class="event-detail pt-2 pb-4 px-4">
      <span class="p-1 px-2 text-sm rounded-xl bg-gray-400 text-white"> {{ event.category[0].name  }}</span>
      <h1 class="text-[28px] font-bold pt-4">{{ event.title  }}</h1>
      <p class="pt-1 text-sm">{{ event.location }}</p>
      <div class="pt-1 text-sm">
        {{ event.dateStart }}
        <template v-if="event.dateEnd">
          - {{ event.dateEnd }}
        </template>
      </div>
    </div>
  
    <div class="event-description px-4 text-sm pb-4">
      <p>{{ event.description }}</p>
    </div>
  
    <div class="event-content px-4">
      <event-accordion title="registrasi">
        <template #content>
          <form-register />
          <!-- <p>Belum tersedia</p> -->
        </template>
      </event-accordion>
  
      <event-accordion title="dances">
        <template #content>
          <event-dances-link />
        </template>
      </event-accordion>
  
      <event-accordion title="Lokasi">
        <template #content>
          <!-- <event-hotel :hotel="event.hotel" /> -->
        </template>
      </event-accordion>
  
      <event-accordion title="Staff">
        <template #content>
          <event-staff :list="event.staff" />
        </template>
      </event-accordion>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useFetch } from '@vueuse/core'
import { useRoute } from 'vue-router'
import EventAccordion from "@/components/event/accordion.vue"
import EventHotel from "@/components/event/hotel.vue"
import EventStaff from "@/components/event/staff.vue"
import EventDancesLink from "@/components/event/dancesLink.vue"
import FormRegister from "@/components/form/register.vue"

const { params } = useRoute()
const event = ref()

const backgroundImage  = computed(()=> {
  return {
    backgroundImage: `url(${event.value.thumbnail})`
  }
})

const fetchEvent = async () => {
  const endpoint = `https://api.rismadancecommunity.com/api-rdc/event?id=${params.id}`

  try {
    const {data, statusCode} = await useFetch(endpoint).get().json()
    // console.log(data);
    event.value = data.value.data.event[0]
    console.log(event.value);
  } catch (error) {
    
  }
}

await fetchEvent()
</script>
