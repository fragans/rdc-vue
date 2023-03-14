<template>
  <div>
    <div v-for="(job, key) in list" :key="`label-${key}`" class="pb-4">
      <span class="font-bold">{{ job.label }}</span>
      <ul v-for="(person, key) in job.names" :key="`person-${key}`">
        <li class="pb-1">{{ person }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventStaff',
  props: ['list']
}
</script>

<style>

</style>