<template>
  <div class="flex flex-col">
    <hr class="my-4">
    <h3 class="font-bold capitalize">Pendaftaran Partisipan {{ gender }} </h3>
    <slot name="fields">
    </slot>
  </div>
</template>

<script>
export default {
  name: 'FormTitle',
  props:['title'],
  data() {
    return {
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
      }
    }
  },
  computed: {
    gender () {
      let gender = ''
      if (this.title === 'male') {
        gender = 'Pria'
      } else if (this.title === 'female') {
        gender = 'Wanita'
      } else{
        gender = 'Berpasangan'
      }
      return gender
    }
  }
}
</script>

