<template>
  <div>
    <h1>Completa aquí el desafío</h1>
    <Burger-component :burgers="burgers"/>
  </div>
</template>

<script>
import BurgerComponent from '@/components/BurgerListComponent.vue'

export default {
  name: 'Burgers',
  components: { BurgerComponent },
  data() {
    return {
      burger: 'burger'
      }
    }
}
</script>

<style>
</style>
