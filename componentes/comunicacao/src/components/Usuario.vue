<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong>{{ name }}</strong></p>
        <p>Idade é <strong>{{ age }}</strong></p>
        <button @click="changeName">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info
                :name="name"
                :age="age"
                @nameChange="name = $event"
                :resetFn="resetName"
            />
            <app-usuario-editar
                :age="age"
            />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            name: 'Pedro',
            age: 21
        }
    },
    methods: {
        changeName() {
            this.name = 'Ana'
        },
        resetName() {
            this.name = 'Pedro'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
