<template>
  <div class="mainList">
    <img alt="burger" src="../assets/burger.svg">
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

.mainList {
  background-color: #581b98;
  padding: 2rem 0;
  margin: 0 2rem;
  border-radius: 1rem;
}

</style>
