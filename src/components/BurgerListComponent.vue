<template>
    <div class="burgers">
        <div id="burgers" v-for="burger in burgers" :key=burger>
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
            burgers: '...'
        };
    },
    methods: {
        getBurgers() {
            this.$http.get('https://prueba-hamburguesas.herokuapp.com/burger').then((response) => { this.burgers = response.data;}, err => console.log(err));
        },
        showMore(ingredientes, calorias) {
            console.log(ingredientes, calorias);
            alert("Ingredientes: " + ingredientes + "\nCalorías: " + calorias)
        },
        deleteBurger(id) {
            console.log(id);
            this.$http.delete('https://prueba-hamburguesas.herokuapp.com/burger/' + id).then((response) => { this.burgers = response.data;}, err => console.log(err));
        }
    },
    created() {
        console.log('componente burguers creado, ahora llamando a la api');
        this.getBurgers();
        },
    }
</script>

<style>

span {
    font-weight: bold;
    }

</style>