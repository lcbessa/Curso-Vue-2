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
import Menu from "./ComponenteMenu.vue";
import Toolbar from "./ComponenteToolbar.vue";
import Carousel from "./ComponenteCarousel.vue";
import Footer from "./ComponenteFooter.vue";

export default {
  components: {
    "app-footer": Footer,
    "app-carousel": Carousel,
    "app-toolbar": Toolbar,
    "app-menu": Menu,
  },
};
</script>
