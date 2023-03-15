<template>
  <form @submit.prevent="register">
    <fieldset class="w-full grid grid-cols-2 gap-4">
      <label for="male" class="select-none bg-gray-100 p-4 flex rounded-xl">
        <input type="radio" id="male" name="tipe" value="male" v-model="tipe.value">
        <div class="pl-2 lg:pl-5">
          Pria
        </div>
      </label>
      <label for="female" class="select-none bg-gray-100 p-4 flex rounded-xl">
        <input type="radio" id="female" name="tipe" value="female" v-model="tipe.value">
        <div class="pl-2 lg:pl-5">
          Wanita
        </div>
      </label>  
      <label for="couple" class="select-none bg-gray-100 p-4 flex rounded-xl">
        <input type="radio" id="couple" name="tipe" value="couple" v-model="tipe.value">
        <div class="flex pl-2 lg:pl-5 items-center">
          Berpasangan
        </div>
      </label>  
    </fieldset>
    <transition name="shrink" mode="out-in">
      <template v-if="tipe.value">
        <form-title :title="tipe.value" >
          <template #fields>
            <template v-if="!success" >
              <transition mode="out-in" name="shrink">
                <template v-if="isCouple">
                  <p>{{ formCounter }}. Partisipan {{ coupleGender }}</p>
                </template>
              </transition>
              
              <label for="nama">
                <span class="capitalize text-sm">nama lengkap</span>
                <input required type="text" id="nama" v-model="name.value" @input="$emit('input', $event.target.value)" />
              </label>
              
              <label for="address">
                <span class="capitalize text-sm">alamat</span>
                <input required type="text" id="address" v-model="address.value" />
              </label>
              
              <label for="city">
                <span class="capitalize text-sm">Kota</span>
                <input required type="text"  id="city" v-model="city.value" />
              </label>
          
              <label for="tel">
                <span class="capitalize text-sm">Nomor Telepon/Handphone</span>
                <input required type="tel"  id="tel" v-model="tel.value" minlength="10" maxlength="14" onkeypress="return /[+,0-9]/i.test(event.key)"/>
              </label>
          
              <label for="codeArea">
                <span class="capitalize text-sm">Kode pos</span>
                <input required type="tel"  id="codeArea" v-model="codeArea.value" minlength="5" maxlength="5" onkeypress="return /[+,0-9]/i.test(event.key)"/>
              </label>
          
              <label for="country">
                <span class="capitalize text-sm">Negara</span>
                <input required type="text"  id="country" v-model="country.value"/>
              </label>
          
              <label for="email">
                <span class="capitalize text-sm">Email</span>
                <input required type="email"  id="email" v-model="email.value"/>
              </label>
              <div class="pt-4">
                <button class="capitalize w-full bg-green-400 text-white font-bold rounded py-2">{{ daftarLabel }}</button>
              </div>
            </template>
            <template v-else>
              <p class="capitalize"> berhasil !! </p>
            </template>
          </template>
        </form-title>
      </template>
    </transition>
  </form>
</template>

<script>

import FormTitle from '../form/title.vue'
import axios from 'axios'
export default {
  name: 'FormRegister',
  components:{
    FormTitle
  },
  data () {
    return {
      tipe: {
        value: ''
      },
      name: {
        value: ''
      },
      address: {
        value: ''
      },
      city: {
        value: ''
      },
      tel: {
        value: ''
      },
      codeArea: {
        value: ''
      },
      country: {
        value: ''
      },
      email: {
        value: ''
      },
      formCounter: 0,
      body: {},
      success: false
    }
  },
  computed: {
    daftarLabel () {
      if (this.formCounter >= 2) {
        return 'daftarkan pasangan'
      }
      if (this.isCouple) {
        if (this.formCounter < 1) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.formCounter = 1  
        }
        return `simpan partisipan`
      }else{
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.formCounter = 0
        return 'daftar'
      }
    },
    isCouple () {
      this.resetForm()
      return this.tipe.value === 'couple' 
    },
    coupleGender () {
      if (this.isCouple) {
        return this.formCounter === 1 ? 'male' : 'female'
      }
      return ''
    }
  },
  methods: {
    register () {
      try {
        console.log('regis');
        if (this.isCouple) {
          this.coupleHandler()
          return false
        }else if (!this.isCouple) {
          this.body = {
            tipe: this.tipe.value,
            name: this.name.value,
            address: this.address.value,
            city: this.city.value,
            tel: this.tel.value,
            codeArea: this.codeArea.value,
            country: this.country.value,
            email: this.email.value
          }
          this.sendForm()
        }
      } catch (error) {
        console.error(error);
      }
      
      return false
    },
    coupleHandler () {
      const gender = this.formCounter == 1 ? 'male' : 'female'
      if (this.formCounter == 1) {
        console.log('coupleHandler')
        
        this.body.tipe= gender,
        this.body.name= this.name.value,
        this.body.address= this.address.value,
        this.body.city= this.city.value,
        this.body.tel= this.tel.value,
        this.body.codeArea= this.codeArea.value,
        this.body.country= this.country.value,
        this.body.email= this.email.value
        this.resetForm()
        this.formCounter++
      } else if (this.formCounter == 2) {
        this.body.tipe_pasangan = gender,
        this.body.name_pasangan = this.name.value,
        this.body.address_pasangan = this.address.value,
        this.body.city_pasangan = this.city.value,
        this.body.tel_pasangan = this.tel.value,
        this.body.codeArea_pasangan = this.codeArea.value,
        this.body.country_pasangan = this.country.value,
        this.body.email_pasangan = this.email.value
        this.sendForm()
      }
    },
    resetForm () {
      this.name.value = ''
      this.address.value = ''
      this.city.value = ''
      this.tel.value = ''
      this.codeArea.value = ''
      this.country.value = ''
      this.email.value = ''
    },  
    async sendForm () {
      try {
        const res = await axios.post(
          'api.domain.com/insert',
          this.body
        )
        console.log(res)
        this.success = true
      } catch (error) {
        console.error(error);
      }

    }
  }
}
</script>

<style lang="postcss">
input[type=text], input[type=tel], input[type=email] {
  @apply px-2 py-2 w-full border-gray-600 outline-offset-2 outline-1 outline outline-gray-300 rounded bg-gray-50 focus:outline-2 focus:outline-gray-500;
}
label {
  @apply pb-2;
}
label.span {
  @apply text-gray-600;
}
</style>