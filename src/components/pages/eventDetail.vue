<template> 
  <div class="max-w-4xl mx-auto bg-gray-100 min-h-screen">
    <EventDetail />
  </div>
</template>

<script>
import EventDetail from "../event/detail.vue"
export default{
  name:'PagesEventDetail',
  components: {
    EventDetail
  }
}
</script>
