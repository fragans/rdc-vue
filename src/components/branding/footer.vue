<template>
  <footer class="bg-gray-500 pt-10 pb-1"> 
    <div class="container max-w-8xl mx-auto flex flex-col items-start md:flex-row justify-between px-4 pb-6">
      <div class="flex flex-col md:flex-row text-white pb-4 gap-4 w-full md:justify-between md:items-center">
        <div class="flex flex-col gap-4">
          <p class="font-bold">Contacts</p>
          <div class="grid grid-rows-2 grid-cols-2 gap-4">
            <div v-for="(item, key) in contacts2" :key="key" >
              <div class="contact">
                <a :href="contactLink(item)" class="flex items-center gap-3 p-2 rounded border border-white">
                  <p class="">
                    {{ item.name }}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img :src="imageLink" alt="" class="max-w-[150px]">
        </div>
        
      </div>
    </div>
    <p class="text-white text-left md:text-center text-xs px-4 py-1">
      Copyright © 2023 Risma Dance Community
    </p>
  </footer>
</template>

<script>
export default {
  name: 'BrandingFooter',
  data() {
    return {
      facebook: '/',
      instagram: '/',
      whatsapp: '/',
      contacts: [
        "Risma Yulana +62 878-2200-2626",
        "Mitha +62 818-0863-0108"
      ],
      contacts2: [
        {
          name: 'Risma Yulana',
          phone: "6287822002626"
        },
        {
          name: 'Mitha',
          phone: "6281808630108"
        },
        {
          name: 'Risma Yulana',
          mail: "risma@rismadancecommunity.com"
        },
        {
          name: 'Mitha',
          mail: "mitha@rismadancecommunity.com"
        },
      ]
    }
  },
  computed: {
    imageLink () {
      
      return `${import.meta.env.VITE_SELF_HOST}/images/RDCv2.png`
    }
  },
  methods: {
    contactLink (item) {
      if (item.phone) {
        return `https://api.whatsapp.com/send/?phone=${item.phone}` 
      }else if (item.mail) {
        return `mailto:${item.mail}`
      }
    }
  }
}
</script>