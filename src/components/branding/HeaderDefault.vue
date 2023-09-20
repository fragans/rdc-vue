<template>
  <div class="bg-white fixed top-0 w-full px-3 py-3 z-20 shadow-lg ">
    <div class="max-w-6xl mx-auto">
      <transition name="shrink">
        <img v-show="!isGoingDown" :src="imageLink" height="100" class="h-24 mx-auto hidden md:block" alt="">
      </transition>
      <div class="main-menu flex ">
        <button class="md:hidden h-12 w-12 rounded-lg" @click="isOpen = !isOpen">
          <font-awesome-icon v-if="!isOpen" icon="fa-solid fa-bars" size="xl" />
          <font-awesome-icon v-else icon="fa-solid fa-close" size="xl" />
        </button>
        <img v-if="!isOpen" :src="imageLink" height="100" class="h-12 md:hidden px-2" alt="" />
        <div class="pr-8 w-full">
          <ul class="desktop md:grid grid-cols-4 p-3 hidden ">
            <li v-for="(item, key) in items" :key="key" class="uppercase text-center text-gray-400"> 
              <router-link :to="item.url">{{ item.label }}</router-link>
            </li>
          </ul>
          <transition name="shrink">
            <ul class="mobile p-3" v-show="isOpen">
              <li v-for="(item, key) in items" :key="key" class="uppercase text-left text-gray-400 py-3" @click="isOpen = false"> 
                <router-link :to="item.url">{{ item.label }}</router-link>
              </li>
            </ul>
          </transition>
        </div>
      </div>  
    </div>
  </div>
</template>

<script setup>
import { useScroll } from '@/composables/useScroll'
import axios from 'axios'
import {ref, computed } from 'vue'
const items = ref([])
const isOpen = ref(false)

const { isGoingDown } = useScroll()

const imageLink = computed(()=> {
  return `/images/RDCv2.png`
})

const fetchMenuJson = async () => {
  const res = await axios.get(`/json/menu.json`)
  const {data: {menus}} = res
  items.value = menus
}

await fetchMenuJson()

</script>