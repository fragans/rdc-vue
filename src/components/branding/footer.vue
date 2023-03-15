<template>
  <footer class="bg-gray-500 pt-10 pb-1"> 
    <div class="container max-w-8xl mx-auto flex flex-col items-start md:flex-row justify-between px-4 pb-6">
      <div class="flex flex-col md:flex-row text-white pb-4 gap-4 w-full md:justify-between md:items-center">
        
        <div class="flex flex-col gap-4">
          <p class="font-bold">Contacts</p>
          <div class="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 grid-cols-1 gap-4">
            <div v-for="(item, key) in contacts2" :key="key" >
              <p class="pb-3">
                {{ item.name }}
              </p>
              <div class="contact">
                <div class="flex items-center gap-3 ">
                  <template v-if="contactPhone(item)">
                    <a :href="item.mail" class="p-2 rounded border border-white flex items-center gap-3 min-w-[100px]">
                      <font-awesome-icon icon="fa-solid fa-envelope"   />
                      <span class="capitalize">email</span>
                    </a>
                    
                  </template>
                  <template v-if="contactMail(item)">
                    <a :href="item.phone" class="p-2 rounded border border-white flex items-center gap-3 min-w-[100px]">
                      <font-awesome-icon icon="fa-brands fa-whatsapp"  />
                      <span class="capitalize">whatsapp</span>
                    </a>
                  </template>
                </div>
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
      Copy © Risma Dance Community 
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
      contacts2: [
        {
          name: 'Risma Yulana',
          phone: "6287822002626",
          mail: "risma@rismadancecommunity.com"
        },
        {
          name: 'Mitha',
          phone: "6281808630108",
          mail: "mitha@rismadancecommunity.com"
        }
      ]
    }
  },
  computed: {
    imageLink () {
      return `${import.meta.env.VITE_SELF_HOST}/images/RDCv2.png`
    }
  },
  methods: {
    contactPhone(item) {
      return `https://api.whatsapp.com/send/?phone=${item.phone}` 
    },
    contactMail(item) {
      return `mailto:${item.mail}`
    }
  }
}
</script>