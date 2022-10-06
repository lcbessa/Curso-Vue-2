<template>
  <div class="usuario">
    <h2>Usuários</h2>
    <hr />
    <p><strong>Código:</strong> {{ id }}</p>
    <button sucesso @click="irParaIncio">Voltar</button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  //   data() {
  //     return {
  //       id: this.$route.params.id,
  //     };
  //   },
  //   watch: {
  //     $route(to, from) {
  //       this.id = to.params.id;
  //     },
  //   },
  methods: {
    irParaIncio() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
</style>