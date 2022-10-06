<template>
  <div class="usuario">
    <h2>Usuários</h2>
    <hr />
    <router-view></router-view>
    <button sucesso @click="irParaIncio">Voltar</button>
  </div>
</template>

<script>
export default {
  methods: {
    irParaIncio() {
      //   this.$router.push({ path: "/" });
      this.$router.push({ name: "inicio" });
    },
  },
};
</script>

<style>
</style>