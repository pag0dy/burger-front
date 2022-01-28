<template>
  <div class="add">
    <img alt="Vue logo" src="../assets/logo.png">
    <AddComponent :burgers="burger"/>
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
      unaVariable: 'una cosa cualquiera'
    }
  }
}
</script>
