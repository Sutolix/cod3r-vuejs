new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert('You clicked the button')
        },
        handleUpdateInput(event) {
            this.valor = event.target.value
        },
    },
})