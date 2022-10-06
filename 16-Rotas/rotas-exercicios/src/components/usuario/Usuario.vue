<template>
  <div class="usuario">
    <h2>Usuários</h2>
    <hr />
    <button sucesso @click="irParaIncio">Voltar</button>
  </div>
</template>

<script>
export default {
  methods: {
    irParaIncio() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
</style>