<template>
  <div id="app">
    {{ title }}
    <button @click="title += '#'">Clique</button>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        title: 'Teste de data com Vue CLI'
      }
    }
  }
</script>

<style>
  #app {
    background-color: chocolate;
    color: #fff;
  }
</style>
