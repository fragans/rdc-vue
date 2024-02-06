<template>
  <footer class=" pt-10 pb-1" id="footer"> 
    <div class="container max-w-8xl mx-auto flex flex-col items-start md:flex-row justify-between px-4 pb-6">
      <div class="flex flex-col md:flex-row text-black pb-4 gap-4 w-full md:justify-between md:items-center">
        
        <div class="flex flex-col gap-4">
          <p class="font-bold text-center">Contacts</p>
          <div class="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 grid-cols-1 gap-4">
            <div v-for="(item, key) in contacts2" :key="key" >
              <p class="pb-3 text-center">
                {{ item.name }}
              </p>
              <div class="contact">
                <div class="flex items-center justify-center gap-3 ">
                  <template v-if="item.mail">
                    <a :href="contactMail(item)" class="p-2 rounded border border-black flex items-center justify-center gap-3 min-w-[100px]">
                      <font-awesome-icon icon="fa-solid fa-envelope"   />
                      <span class="capitalize">email</span>
                    </a>
                    
                  </template>
                  <template v-if="item.phone">
                    <a :href="contactPhone(item)" class="p-2 rounded border border-black flex items-center justify-center gap-3 min-w-[100px]">
                      <font-awesome-icon icon="fa-brands fa-whatsapp"  />
                      <span class="capitalize">whatsapp</span>
                    </a>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  </footer>
</template>

<script>
export default {
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
      return `/images/RDCv2.png`
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