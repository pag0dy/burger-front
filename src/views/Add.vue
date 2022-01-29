<template>
  <div class="add">
    <img alt="burger" src="../assets/burger.svg">
    <AddComponent :newBurger="newBurger"/>
  </div>
</template>

<script>

import AddComponent from '@/components/AddComponent.vue'

export default {
  name: 'Add',
  components: {
    AddComponent
  },
  data() {
    return {
      newBurger: "newBurger"
    }
  }
}
</script>
<style>
.add {
  background-color: #581b98;
  padding: 2rem 0;
  margin: 0 2rem;
  border-radius: 1rem;
}

</style>
