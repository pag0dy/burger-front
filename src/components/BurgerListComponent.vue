<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-4 gy-2 justify-content-">
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

.card {
    width:fit-content;
}

span {
    font-weight: bold;
    }

</style>