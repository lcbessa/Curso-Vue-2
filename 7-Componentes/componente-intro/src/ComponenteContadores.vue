<template>
  <div>
    <div class="contadores">
      <h1>Contadores</h1>
      <app-contador v-for="c in 5" :key="c" />
    </div>
  </div>
</template>

<script>
import ComponenteContador from "./ComponenteContador.vue";
export default {
  components: {
    "app-contador": ComponenteContador,
  },
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
