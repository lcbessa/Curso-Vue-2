<template>
  <v-app>
    <Menu />
    <Toolbar />
    <v-content>
      <Carousel />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Menu from "./components/template/ComponenteMenu.vue";
import Toolbar from "./components/template/ComponenteToolbar.vue";
import Carousel from "./components/widgets/ComponenteCarousel.vue";
import Footer from "./components/template/ComponenteFooter.vue";

export default {
  components: {
    Footer,
    Carousel,
    Toolbar,
    Menu,
  },
};
</script>
