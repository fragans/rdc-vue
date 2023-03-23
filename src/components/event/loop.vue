<template> 
  <div class="max-w-4xl mx-auto bg-gray-100 px-4">
    <h2 class="text-2xl px-4 py-2">Events</h2>
    <div v-if="isError">
      Terjadi kesalahan. muat ulang halaman ini
    </div>
    <template v-else>
      <Suspense>
        <template #default>
          <div class="post-loop grid grid-cols-1 md:grid-cols-3 gap-4">
            <card-event v-for="(item, key) in events" :item="item" :key="key" />
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

import CardEvent from '../card/event.vue'
export default{
  name: 'EventLoop',
  async setup (){
    let isError = ref(false)
    
    const events = ref(null)
    try {
      
      const url = `${import.meta.env.VITE_API_HOST}/api-rdc/event`
      const res = await axios.get(url)
      console.log(res)
      const { 
        data : {
          data: {
            event
          }
        }
      } = res
      events.value = event
    } catch (error) {
      isError.value = true
      console.error(error)
    }
    
    return { events, isError }
  },
  components: {
    CardEvent
  },
  computed: {
  }

}
  
</script>

<style>

</style>