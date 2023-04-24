<template>
  <main class="text-gray-800">
    <section class="banner max-w-6xl mx-auto flex flex-col md:flex-row justify-center bg-gray-100 px-6 py-8">
      <div class="flex justify-between md:w-1/3">
        <h2 class="text-5xl font-semibold pb-8 font-anton" v-if="home">{{ home.banner.title }}</h2>
      </div>
      
      <div class="md:w-1/2 ">
        <hr class="border border-black"/>
        <p class="font-sans pt-4 leading-relaxed text-2xl" v-if="home">{{  home.banner.description }}</p>
      </div>
    </section>

    <section class="video md:px-10 max-w-6xl mx-auto">
      <div class="bg-gray-200 pb-[56.25%] w-full"></div>
    </section>

    <section class="story px-8 py-8 max-w-4xl mx-auto">
      <div class="flex flex-col gap-4">
        <h2 class="font-anton text-5xl capitalize" v-if="home"> {{ home.story.title }} </h2> 
        <div class="flex flex-col md:flex-row gap-8 leading-relaxed text-2xl" v-if="home">
          <p>{{ home.story.description[0] }}</p>
          <p>{{ home.story.description[1] }}</p>
        </div>
        <hr class="border border-black mt-8"/>
      </div>
      <div class="profile flex flex-col items-center justify-center pt-10" v-if="home">
        <div class="w-32 h-32  bg-cover bg-center rounded-full"  :style="{backgroundImage: `url(${home.story.avatar})`}"></div>
        <span class="text-4xl font-anton pt-6">Risma Yulana</span>
        <span>Athlete, speaker, influencer. </span>
      </div>
      
    </section>
    <section class="events max-w-6xl mx-auto bg-gray-100 px-4 min-h-screen">
      <event-loop-header />
      <event-loop />
    </section>
    
  </main>
</template>

<script>
import EventLoop from '../components/event/loop.vue'
import EventLoopHeader from '../components/event/loopHeader.vue'
import axios from 'axios'
export default {
  components: {
    EventLoop,
    EventLoopHeader
  },
  data() { 
    return {
      home: ''
    }
  },
  methods: {
    async fetchHomeJson() {
      const res = await axios.get(`/json/home.json`)
      const { data } = res
      console.log(data)
      return data
    }
  },  
  async created () {
    console.log('mounted')
    const home = await this.fetchHomeJson()
    this.home = home
  },
}
</script>