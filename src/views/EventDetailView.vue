<template> 
  <div class="max-w-4xl mx-auto bg-gray-100 min-h-screen">
    <div v-if="isError">
      Terjadi kesalahan. muat ulang halaman ini
    </div>
    <template v-else>
      <Suspense>
        <template #default>
          <div>
            <div class="event-thumbnail bg-cover bg-center " style="padding-bottom: 141%;" :style="backgroundImage" />
            <div class="bg-white ">
              <div class="event-detail pt-2 pb-4 px-4">
                <span class="p-1 px-2 text-sm rounded-xl bg-gray-400 text-white"> {{ event.category  }}</span>
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
            </div>
          
            <div class="event-content px-4 pt-4">
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
                  <event-hotel :hotel="event.hotel" />
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
        <template #fallback>
          <div class="w-full min-h-screen">
            loading..
          </div>
        </template>
      </Suspense>
    </template>
  </div>
</template>

<script>
import { ref } from "vue"

import axios from 'axios'

import EventAccordion from "../components/event/accordion.vue"
import EventHotel from "../components/event/hotel.vue"
import EventStaff from "../components/event/staff.vue"
import EventDancesLink from "../components/event/dancesLink.vue"
import FormRegister from "../components/form/register.vue"
export default{
  async setup (){
    let isError = ref(false)
    
    const event = ref(null)
    try {
      
      const url = `/json/data.json`
      const res = await axios.get(url)
      const { data : {
        events: [first]
      }} = res
      event.value = first
    } catch (error) {
      isError.value = true
      console.error(error)
    }
    
    return { event, isError }
  },
  components: {
    EventAccordion,
    EventDancesLink,
    EventHotel,
    EventStaff,
    FormRegister 
  },
  computed: {
    backgroundImage () {
      return {
        backgroundImage: `url(${this.event.thumbnail})`
      }
    }
  }

}
  
</script>

<style>

</style>