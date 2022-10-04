<template>
  <div id="app">
    <h1>Filtros & Mixins (Desafio)</h1>
    <p>{{ palavra | trocaEspacoPorVirgula }}</p>
    <p>{{ palavra | contarPalavras }}</p>
    <p>{{ fraseComVirgulas }}</p>
    <p>{{ fraseComTamanhos }}</p>
  </div>
</template>

<script>
import frasesMixin from "./fraseMixin";
export default {
  mixins: [frasesMixin],

  data() {
    return {
      palavra: "Lalalalala Lelelele Lilili Lolo Lu",
    };
  },
  filters: {
    trocaEspacoPorVirgula(valor) {
      return valor.replace(/\s/g, ",");
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
