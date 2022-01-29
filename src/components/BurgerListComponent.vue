<template>
    <div class="header">
        <h1>Hamburguesas</h1>
        <p>Aquí encontrarás las hamburguesas disponibles.</p>
    </div>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-4 gy-3 justify-content-center">
            <div id="burgers" v-for="burger in burgers" :key=burger.id>
                <div class="col">
                    <div class="card bg-light">
                        <div class="card-body">
                            <h5 class="card-title">{{ burger.nombre }}</h5>
                            <button class="btn btn-success mx-2" @click="showMore(burger.ingredientes, burger.calorias)">Ver más</button>
                            <button class="btn btn-danger mx-2" @click="deleteBurger(burger.id)">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Burgers',
    data() {
        return {
            burgers: [null]
        };
    },
    methods: {
        getBurgers() {
            // Agregué la función "setInterval" porque la página no se actualizaba al eliminar una hamburguesa
            this.burgers = setInterval(() => this.$http.get('https://prueba-hamburguesas.herokuapp.com/burger').then((response) => { this.burgers = response.data;}, err => console.log(err)), 2000)
        },
        showMore(ingredientes, calorias) {
            // Utilicé un alert para mostrar la información de cada hamburguesa. No quise demorarme más por intentar hacer un modal customizado.
            alert("Ingredientes: " + ingredientes + "\nCalorías: " + calorias);
        },
        deleteBurger(id) {
            // Se despliega una alerta para confirmar que se desea eliminar una hamburguesa.
            if (confirm("Estás seguro de eliminar esta hamburguesa?")) {
                this.$http.delete('https://prueba-hamburguesas.herokuapp.com/burger/' + id);
            }
        },
    },
    // Esta función evita que el intervalo siga corriendo cuando se cambia de página.
    beforeUnmount () {
        clearInterval(this.getBurgers);
    },
    created() {
        this.getBurgers();
        },
    }
</script>

<style>

.card {
    width:fit-content;
    color: black;
}

span {
    font-weight: bold;
    }

</style>