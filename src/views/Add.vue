<template>
  <div class="add">
    <img alt="Vue logo" src="../assets/burger.svg">
    <AddComponent :newBurger="newBurger"/>
  </div>
</template>

<script>
// @ is an alias to /src
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
  background-color: #f0f0f0;
  padding: 2rem 0;
  margin: 0 2rem;
  border-radius: 1rem;
}

</style>
