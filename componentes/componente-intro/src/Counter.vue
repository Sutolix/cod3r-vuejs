<template>
  <div class="counter">
    <span>{{ counter }}</span>
    <button @click="plus">+</button>
    <button @click="less">-</button>
  </div>
</template>

<script>
export default {
  name: 'app-conuter',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    plus() {
      this.counter++
    },
    less() {
      this.counter--
    }
  }
}
</script>

<style>
  .counter span{
    border-bottom: 1px solid #ccc;
    height: 30px;
    padding: 5px 25px;
  }
  .counter button {
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background-color: coral;
    color: #fff;
    margin-left: 10px;
    outline: none;
    border: none;
  }
</style>