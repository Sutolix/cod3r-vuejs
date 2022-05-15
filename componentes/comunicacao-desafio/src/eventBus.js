import Vue from 'vue'
export default new Vue({
  methods: {
    setUserSelected(user){
      this.$emit('userChange', user)
    },
    onUserChange(callback){
      this.$on('userChange', callback)
    }
  }
})
