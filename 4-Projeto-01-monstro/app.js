new Vue({
  el: "#app",
  data: {
    running: true,
    playerLife: 100,
    monsterLife: 0,
  },
  computed: {
    hasResult() {
      return this.playerLife == 0 || this.monsterLife == 0;
    },
  },
  methods: {},
  watch: {},
});
