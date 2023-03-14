<template> 
  <div class="max-w-4xl mx-auto">
  <div class="event-thumbnail bg-cover bg-center " style="padding-bottom: 141%;" :style="backgroundImage" />
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
  <div class="event-content px-4">
    <accordion title="registrasi">
      <template #content>
        <!-- <form-register /> -->
        <p>Belum tersedia</p>
      </template>
    </accordion>
  </div>
  </div>
</template>

<script>
// import { ref } from "vue"
export default{
  setup (){
    // console.log('async setup (){')
    // const event = ref(null)
    // const res = await fetch(`${import.meta.env.VITE_SELF_HOST}/json/data.json`)
    // // const {events : [first] } = res.json()

    // event.value = res.json()
    // return { event }
  },
  data () {
    return {
      event: ''
    }
  },
  async created() {
    const res = await fetch(`${import.meta.env.VITE_SELF_HOST}/json/data.json`)
    this.event = res.json()
  }

}
  
</script>

<style>

</style>