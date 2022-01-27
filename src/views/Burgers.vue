<template>
  <div>
    <img alt="burger" src="../assets/burger.svg">
    <h1>Hamburguesas</h1>
    <Burger-component :burgers="burger"/>
  </div>
</template>

<script>
import BurgerComponent from '@/components/BurgerListComponent.vue'

export default {
  name: 'Burgers',
  components: { BurgerComponent },
  data() {
    return {
      burger: 'burgers'
      }
    }
}
</script>

<style>
img {
  width: 200px;
  height: auto;
}

</style>
