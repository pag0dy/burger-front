<template>
    <div class="burgers">
        <div id="burgers" v-for="burger in burgers" :key=burger>
            <h3>{{ burger.nombre }}</h3>
            <button @click="showMore(burger.ingredientes, burger.calorias)">Ver más</button>
            <button @click="deleteBurger(burger.id)">Eliminar</button>
            <ul id="ingredientes" v-for="ingrediente in burger.ingredientes" :key=ingrediente>
                   <li>{{ ingrediente }}</li>
               </ul>
            <p id="calorias(burger.id)">Calorias: {{ burger.calorias }}</p>
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
        }
    },
    created() {
        console.log('componente burguers creado, ahora llamando a la api');
        this.getBurgers();
        },
    }
</script>

<style>
ul {
    display: none;
    list-style-type: none;
}

p {
    display:none;
}
h2 {
    text-transform: uppercase ;
    }

span {
    font-weight: bold;
    }

</style>