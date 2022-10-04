export default {
  computed: {
    fraseComVirgulas() {
      return this.palavra.replace(/\s/g, ",");
    },
    fraseComTamanhos() {
      return this.palavra
        .split(" ")
        .map((palavra) => `${palavra} (${palavra.length})`)
        .join(" ");
    },
  },
};
