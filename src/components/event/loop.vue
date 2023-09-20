<template> 
  <div class="py-4">
    <div v-if="isError">
      Terjadi kesalahan. muat ulang halaman ini
    </div>
    <template v-else>
      <Suspense>
        <template #default>
          <div class="post-loop grid grid-cols-1 gap-4">
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
      // https://api.rismadancecommunity.com/api-rdc/registration
      const url = `${import.meta.env.VITE_API_HOST}/api-rdc/event`
      const res = await axios.get(url)
      // console.log(res)
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
