<template>
  <div class="flex items-center">
    <fieldset class="w-full grid grid-cols-2 gap-4">
      <label for="male" class="select-none bg-gray-100 p-4 flex rounded-xl">
        <input type="radio" id="male" name="tipe" value="male" v-model="value" @input="onInput($event)">
        <div class="pl-2 lg:pl-5">
          Pria
        </div>
      </label>
      <label for="female" class="select-none bg-gray-100 p-4 flex rounded-xl">
        <input type="radio" id="female" name="tipe" value="female" v-model="value" @input="onInput($event)">
        <div class="pl-2 lg:pl-5">
          Wanita
        </div>
      </label>  
      <label for="couple" class="select-none bg-gray-100 p-4 flex rounded-xl">
        <input type="radio" id="couple" name="tipe" value="couple" v-model="value" @input="onInput($event)">
        <div class="flex pl-2 lg:pl-5 items-center">
          Pasangan
        </div>
      </label>  
    </fieldset>
  </div>
</template>
<script>
  export default {
    name: 'FormGender',
    data() {
      return {
        value: '1'
      }
    },
    methods: {
      setValue (val) {
        this.value = val + 1
      },
      onInput(event) {
        if (!event) {return}
        this.$emit('input', event.target.value)
      }
    }
  }
</script>
