<template>
  <div>
    <div class="contadores">
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

<style>
.contadores {
  background: #fff;
}
</style>
