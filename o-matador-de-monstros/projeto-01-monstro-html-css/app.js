new Vue({
  el: '#app',
  data: {
    isPlaying: false,
    showResult: false,
    showLogs: false,
    playerLife: 100,
    monsterLife: 100,
    playerInDanger: false,
    monsterInDanger: false,
    playerLoss: false,
    monsterLoss: false,
    logs: [],
  },
  methods: {
    resetGame() {
      this.isPlaying = false;
      this.showLogs = false;
      this.playerLife = 100;
      this.monsterLife = 100;
      this.showResult = false;
      this.playerLoss = false;
      this.monsterLoss = false;
      this.playerInDanger = false;
      this.monsterInDanger = false;
      this.logs = [];
    },
    startGame() {
      this.resetGame();
      this.isPlaying = true;
    },
    result() {
      this.playerLoss = this.playerLife <= 0 && this.playerLife < this.monsterLife;
      this.monsterLoss = this.monsterLife <= 0 && this.monsterLife < this.playerLife;

      if(this.playerLoss || this.monsterLoss) {
        this.showResult = true;
        this.isPlaying = false;
      }
    },
    getRandomNumber(min, max) {
      var number = Math.floor(Math.random() * max) + min;
      return number;
    },
    attack(event, specialAtack = false) {
      if(!this.showLogs) this.showLogs = true;

      var playerDamage = this.getRandomNumber(5,10);
      var monsterDamage = this.getRandomNumber(5,10);
      
      if(Math.random() > 0.4 && monsterDamage < playerDamage) {
        var plusDamage = this.getRandomNumber(1,3);
        monsterDamage = playerDamage + plusDamage;
      }
      
      if((playerDamage - monsterDamage) >= 5) {
        var balanceDamage = this.getRandomNumber(1,3);
        playerDamage = monsterDamage + balanceDamage;
      }

      if(specialAtack) {
        [playerDamage, monsterDamage] = [monsterDamage, playerDamage];
      }
      
      this.playerLife = this.playerLife - monsterDamage <= 0 ? 0 : this.playerLife - monsterDamage;
      this.monsterLife = this.monsterLife - playerDamage <= 0 ? 0 : this.monsterLife - playerDamage;

      if(this.playerLife < 20) {
        this.playerInDanger = true;
      }

      if(this.monsterLife < 20) {
        this.monsterInDanger = true;
      }

      this.logs.unshift({
        'monster': `Monstro atingiu jogador com ${monsterDamage}.`,
        'player': `Jogador atingiu monstro com ${playerDamage}.`,
      });
    
      this.result();
    },
    specialAtack(event) {
      this.attack(event, true);
    },
    heal() {
      var heal = this.getRandomNumber(5,10);
      var monsterDamage = this.getRandomNumber(5,10);

      var newPlayerLife = this.playerLife + heal - monsterDamage;

      if(newPlayerLife > 100) {
        heal = 100 - this.playerLife;
        newPlayerLife = 100;
      }

      this.playerLife = newPlayerLife;

      this.logs.unshift({
        'monster': `Monstro atingiu jogador com ${monsterDamage}.`,
        'player': `Jogador ganhou força de ${heal}.`,
      });

      this.result();
    }
  }
})
