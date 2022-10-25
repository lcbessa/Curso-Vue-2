<template>
  <div id="app">
    <h1>Problema de Monty Hall</h1>
    <ComponenteGift> </ComponenteGift>
  </div>
</template>

<script>
import ComponenteGift from "./components/ComponenteGift.vue";
export default {
  name: "App",
  components: { ComponenteGift },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Montserrat", "sans-serif";
}
body {
  color: #fff;
  background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153));
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#app h1 {
  border: 1px solid #000;
  background-color: #0004;
  padding: 20px;
  margin-bottom: 60px;
}
</style>