<template>
  <div class="counters">
    <h1>Contadores</h1>
    <app-counter v-for="c in 5" :key="c"/>
  </div>
</template>

<script>
import Counter from './Counter.vue'

export default {
  name: 'app-counters',
  components: {
    'app-counter' : Counter
  }
}
</script>

<style>

</style>