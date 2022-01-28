<template>
  <div>
    <h2>Crea una nueva hamburguesa</h2>
  </div>
  <div id="formulario">
    
  </div>
</template>

<script>
export default {
  name: 'AddComponent',
  // props: ['id', 'nombre', 'ingredientes', 'calorias'],
  data() {
    return {
      burger: 'no burger',
    };
  },
  methods: {
    addBurger() {
      // Acá tienes un ejemplo de llamada http a la api
      // puedes encontrar documentación para usar el cliente http de vue aquí:
      // https://github.com/pagekit/vue-resource
      this.$http.post('https://prueba-hamburguesas.herokuapp.com/burger/', {"id":100, "nombre":"Vegetariana", "ingredientes":["pan", "falafel", "pimenton", "tomate", "palta"], "calorias":250})
        .then((response) => { this.saludo = response.data; }, err => console.log(err));
    },
  },
  created() {
    console.log('componente welcome creado!, llamando a api');
    this.addBurger();
  },
}
</script>

<style>

</style>
