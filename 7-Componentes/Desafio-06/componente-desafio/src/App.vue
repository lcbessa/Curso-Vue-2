<template>
  <v-app>
    <app-menu />
    <app-toolbar />
    <v-content>
      <app-carousel />
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import Menu from "./components/template/ComponenteMenu.vue";
import Toolbar from "./components/template/ComponenteToolbar.vue";
import Carousel from "./components/widgets/ComponenteCarousel.vue";
import Footer from "./components/template/ComponenteFooter.vue";

export default {
  components: {
    "app-footer": Footer,
    "app-carousel": Carousel,
    "app-toolbar": Toolbar,
    "app-menu": Menu,
  },
};
</script>
