<template>
  <div class="header">
    <h2>Crea una nueva hamburguesa</h2>
    <p>A continuación ingresa los datos de la hamburguesa que quieres crear.</p>
  </div>
  <div class="container">
      <form class="row row-cols-lg-auto g-3 align-items-end justify-content-center">
        <div class="col">
          <label for="nombre" class="form-label">Nombre:</label>
        </div>
        <div>
          <input type="text" name="nombre" id="nombre" class="form-control" v-model="newBurger.nombre">
        </div>
        <div class="col">
          <label for="ingredientes" class="form-label">Ingredientes:</label>
        </div>
        <div>
          <textarea name="ingredientes" id="ingredientes" cols="20" rows="1" class="form-control" placeholder="Separados por comas (,)" v-model="newBurger.ingredientes"></textarea>
        </div>
        <div class="col-2">
          <label for="calorias" class="form-label">Calorías:</label>
        </div>
        <div>
          <input type="number" name="calorias" id="calorias" class="form-control" v-model="newBurger.calorias">
        </div>
        <div class="col-4">
          <button class="btn btn-success mx-2" @click="addBurger">Guardar</button>
          <button class="btn btn-warning mx-2" @click="clearBurger">Limpiar</button>
        </div>
      </form>
  </div>
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
      // Agregué esta constante para guardar los ingredientes ingresados como una lista, usando el método split.
      const ingredientList = this.newBurger.ingredientes.split(',');
      // Aquí se agregan los ingredientes como lista al objeto newBurger.
      this.newBurger.ingredientes = ingredientList;
      // Una vez consolidado el objeto newBurger, hago un POST para agregarlo a la base de datos.
      // Luego se despliega una alerta que avisa que se ha creado exitosamente la hamburguesa y redirecciono a la vista principal.
      this.$http.post('https://prueba-hamburguesas.herokuapp.com/burger/', this.newBurger)
        .then( alert("Hamburguesa creada!"), this.$router.push({name: 'hamburguesas'}));
      // Por último, limpio el formulario. 
      this.newBurger = {id:0,nombre:'',ingredientes:[],calorias:0}
    },
    clearBurger() {
      // Permite limpiar el formulario si no se quiere guardar los datos ingresados.
      this.newBurger = {id:0,nombre:'',ingredientes:[],calorias:0}
    }
  },
}
</script>

<style>

.container {
  padding: 1rem 0;
  color: white;
}

label {
  font-weight: bold;
}

.header {
  padding: 2rem;
  background-color: #581b98;
  color: white;
}

</style>
