<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p>
      Idade do usuário <strong>{{ age }}</strong>
    </p>
    <button @click="changeAge">Alterar Idade</button>
  </div>
</template>

<script>
import barramento from '@/eventBus'

export default {
  props: {
    age: Number,
  },
  methods: {
    changeAge() {
        this.age += 1
        barramento.$emit('ageChange', this.age)
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
