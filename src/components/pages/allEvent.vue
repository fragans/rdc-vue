<template>
<section class="events max-w-6xl mx-auto bg-gray-100 px-4 min-h-screen">
  <event-loop-header />
  <event-loop />
</section>
</template>
<script>
import EventLoop from '../event/loop.vue'
import EventLoopHeader from '../event/loopHeader.vue'
export default {
  name: 'PagesAllEvent',
  components: {
    EventLoop,
    EventLoopHeader
  }
}
</script>
<style lang="">
  
</style>