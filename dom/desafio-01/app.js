new Vue({
  el: '#desafio',
  data: {
    name: 'Tiago Reis',
    age: 22,
    image: 'https://picsum.photos/200/400'
  },
  methods: {
    ageTimesThree: function() {
      let newAge = this.age * 3
      return newAge
    },
    randomNumber: function() {
      return Math.random()
    },
  }
})