<template>
  <div>
    <h2>Crea una nueva hamburguesa</h2>
  </div>
  <div id="formulario">
    <label for="nombre">Nombre:</label>
    <input type="text" name="nombre" id="nombre" v-model="newBurger.nombre"> <br>
    <label for="ingredientes">Ingredientes:</label>
    <textarea name="ingredientes" id="ingredientes" cols="20" rows="10" v-model="newBurger.ingredientes"></textarea>
    <label for="calorias">Calorías:</label>
    <input type="number" name="calorias" id="calorias" v-model="newBurger.calorias">
  </div>
  <button @click="addBurger">Guardar</button>
</template>

<script>
export default {
  name: 'AddComponent',
  data() {
    return {
      newBurger: {
        id: 0,
        nombre: '',
        ingredientes: [],
        calorias: 0
      } 
    };
  },
  methods: {
    addBurger() {
      const ingredientList = this.newBurger.ingredientes.split(',');
      this.newBurger.ingredientes = ingredientList;
      this.$http.post('https://prueba-hamburguesas.herokuapp.com/burger/', this.newBurger)
        .then( alert("Hamburguesa creada!"), this.$router.push({name: 'hamburguesas'}));
      this.newBurger = {id:0,nombre:'',ingredientes:[],calorias:0}

    },
  },
}
</script>

<style>

</style>
