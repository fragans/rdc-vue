<template>
  <section class="events max-w-6xl mx-auto bg-gray-100 px-4 min-h-screen">
    <event-loop-header />
    <event-loop />
</section>
</template>
<script setup>
import EventLoop from '../components/event/loop.vue'
import EventLoopHeader from '../components/event/loopHeader.vue'
</script>
