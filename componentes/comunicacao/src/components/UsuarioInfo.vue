<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do Usuário: <strong>{{ name }}</strong>
    </p>
    <p>
      Idade do usuário <strong>{{ age }}</strong>
    </p>
    <button @click="resetName">Reiniciar Nome</button>
    <button @click="resetFn">Reiniciar Nome (Callback)</button>
  </div>
</template>

<script>
import barramento from "@/eventBus";

export default {
  props: {
    name: {
      type: [String, Array],
      default: "Anônimo",
      //required: true,
      // default: function() {
      //     return Array(10).fill(0).join(',');
      // }
    },
    age: Number,
    resetFn: Function,
  },
  methods: {
    resetName() {
      // const old = this.name
      this.$emit("nameChange", "Pedro");
      // this.$emit('nameChange', {
      //     new: this.name,
      //     old
      // })
    },
  },
  created() {
    barramento.$on("ageChange", (age) => {
      this.age = age;
    });
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
