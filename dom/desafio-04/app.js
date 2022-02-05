new Vue({
	el: '#desafio',
	data: {
		effect: '',
		classOne: true,
		inputClass: '',
		userClass : '',
		booleanClass : '',
		userStyle: '',
		progressCounter: 0
	},
	computed: {
		progressBar() {
			return {
				position: 'relative',
				height: '30px',
				width: '200px',
				backgroundColor: '#ccc',
				marginTop: '20px'
			}
		},
		progressIndicator() {
			return {
				position: 'absolute',
				width: this.progressCounter + '%',
				height: '100%',
				backgroundColor: 'blue',
				top: '0',
				lef: '0'
			}
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.effect = this.effect === 'destaque' ? 'encolher' : 'destaque'
			}, 600)
			
		},
		iniciarProgresso() {
			if(this.progressCounter === 100) this.progressCounter = 0
			setInterval(() => {
				if(this.progressCounter < 100) {
					this.progressCounter += 1
				}
			}, 15)
		}
	}
})
