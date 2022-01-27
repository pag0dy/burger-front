<template lang="html">
  <div>
    <h2>Crea una nueva hamburguesa</h2>
  </div>
</template>

<script>
export default {
  name: 'AddComponent',
  props: ['algo'],
  data() {
    return {
      saludo: '...Nada todavía',
    };
  },
  methods: {
    getWelcomeMessage() {
      // Acá tienes un ejemplo de llamada http a la api
      // puedes encontrar documentación para usar el cliente http de vue aquí:
      // https://github.com/pagekit/vue-resource
      this.$http.get('https://prueba-hamburguesas.herokuapp.com/test')
        .then((response) => { this.saludo = response.data; }, err => console.log(err));
    },
  },
  created() {
    console.log('componente welcome creado!, llamando a api');
    this.getWelcomeMessage();
  },
}
</script>

<style>

</style>
