<template>
    <div class="burgers">
        <h2>Hamburguesas disponibles</h2>
        <div id="burgers" v-for="burger in burgers" :key=burger>
               <h3>{{ burger.nombre }}</h3>
               <ul id="ingredientes" v-for="ingrediente in burger.ingredientes" :key=ingrediente>
                   <li>{{ ingrediente }}</li>
               </ul>
               <p>Calorias: {{ burger.calorias }}</p>
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
    },
    created() {
        console.log('componente burguers creado, ahora llamando a la api');
        this.getBurgers();
        },
    }
</script>

<style>
ul {
    list-style-type: none;
}
h2 {
    text-transform: uppercase ;
    }

span {
    font-weight: bold;
    }

</style>