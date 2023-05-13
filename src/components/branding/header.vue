<template>
  <div class="bg-white fixed top-0 w-full px-3 py-3 z-20 shadow-lg ">
    <div class="max-w-6xl mx-auto">
      <img :src="imageLink" height="100" class="h-24 mx-auto hidden md:block" alt="">
      <div class="main-menu">
        <button class="md:hidden h-12 w-12 rounded-lg" @click="isOpen = !isOpen">
          <transition name="slide-fade">
            <font-awesome-icon v-if="!isOpen" icon="fa-solid fa-bars" size="xl" />
            <font-awesome-icon v-else icon="fa-solid fa-close" size="xl" />
          </transition>
        </button>
        <div class="px-8">
          <ul class="desktop md:grid grid-cols-4 p-3 hidden ">
            <li v-for="(item, key) in items" :key="key" class="uppercase text-center text-gray-400"> 
              <router-link :to="item.url">{{ item.label }}</router-link>
            </li>
          </ul>
          <transition name="shrink">
            <ul class="mobile p-3" v-show="isOpen">
              <li v-for="(item, key) in items" :key="key" class="uppercase text-center text-gray-400 py-3" @click="isOpen = false"> 
                <router-link :to="item.url">{{ item.label }}</router-link>
              </li>
            </ul>
          </transition>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  name:'HeaderDefault',
  data() {
    return {
      items: [],
      isOpen: false
    }
  },
  computed: {
    imageLink () {
      return `/images/RDCv2.png`
    }
  },
  async created() {
    const res = await this.axios.get(`/json/menu.json`)
    this.items = res.data.menus
  }
}
</script>