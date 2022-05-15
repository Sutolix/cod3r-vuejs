import Vue from 'vue'
export default new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageChange', age)
    },
    onAgeChange(callback) {
      this.$on('ageChange', callback)
    }
  }
})
