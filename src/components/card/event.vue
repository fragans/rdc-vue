<template>
  <div class="flex">
    <div class="pl-6 pt-4 pb-2 hidden md:block">
      <span class="inline-block capitalize  bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ dateFormatter }}</span>
    </div>
    <div class="w-20 pt-4 md:flex flex-col items-center hidden">
      <span class="block border border-gray-300 rounded-full w-4 h-4" />
      <span class="block bg-gray-200 w-1 h-full" />
    </div>
    <router-link :to="`/event/${item.id}`">
      <div class="xl:max-w-3xl lg:max-w-2xl md:max-w-md rounded overflow-hidden">
        <div class="md:px-6 py-4">
          <span class="inline-block md:hidden capitalize  text-gray-500 rounded-full py-1 text-sm font-semibold mr-2 mb-2">{{ dateFormatter }}</span>
          <div class="font-bold text-xl mb-2">{{ item.title }}</div>
          <p class="text-gray-700 text-base">
            {{ item.description }}
          </p>
          <p class="font-semibold text-end">Read more 
            <font-awesome-icon icon="fa-solid fa-chevron-right" /> 
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'CardEvent',
  props: ['item'],
  computed: {
    thumbnail () {
      return {
        backgroundImage: `url(${this.item.thumbnail})`,
        paddingBottom: '56.25%'
      }
    },
    dateFormatter () {
      if (!this.item) { return }
      const unixToInt = parseInt(this.item.dateEnd)
      const dateObj = new Date(unixToInt * 1000)
      const month = dateObj.toLocaleString('default', { month: 'long' })
      const tanggal = dateObj.getDate()
      const year = dateObj.getFullYear()
      return `${month} ${tanggal}, ${year}`
    }
  }
}
</script>