<template>
  <v-app>
    <Sidebar />
    <Toolbar />
    <v-content>
      <Carousel />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Toolbar from "./Toolbar.vue";
import Carousel from "./Carousel.vue";
import Footer from "./Footer.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    Toolbar,
    Carousel,
    Footer,
  },
};
</script>
