<template>
    <div class="burgers">
        <div id="burgers" v-for="burger in burgers" :key=burger.id>
            <h3>{{ burger.nombre }}</h3>
            <button @click="showMore(burger.ingredientes, burger.calorias)">Ver más</button>
            <button @click="deleteBurger(burger.id)">Eliminar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Burgers',
    data() {
        return {
            burgers: []
        };
    },
    methods: {
        getBurgers() {
            this.burgers = setInterval(() => this.$http.get('https://prueba-hamburguesas.herokuapp.com/burger').then((response) => { this.burgers = response.data;}, err => console.log(err)), 2000)
        },
        showMore(ingredientes, calorias) {
            console.log(ingredientes, calorias);
            alert("Ingredientes: " + ingredientes + "\nCalorías: " + calorias);
        },
        deleteBurger(id) {
            console.log(id);
            if (confirm("Estás seguro de eliminar esta hamburguesa?")) {
                this.$http.delete('https://prueba-hamburguesas.herokuapp.com/burger/' + id);
            }
        },
    },
    beforeUnmount () {
        clearInterval(this.getBurgers);
    },
    created() {
        this.getBurgers();
        },
    }
</script>

<style>

span {
    font-weight: bold;
    }

</style>