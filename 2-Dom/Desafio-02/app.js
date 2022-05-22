new Vue({
  el: "#desafio",
  data: {
    valor: "",
  },
  methods: {
    alerta(event) {
      console.log(event);
      alert("Alerta");
    },
    alterarValor(event) {
      this.valor = event.target.value;
    },
  },
});
