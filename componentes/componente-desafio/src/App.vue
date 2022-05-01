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
// @/ faz referencia a pasta src/
import Sidebar from "@/components/template/Sidebar.vue";
import Toolbar from "@/components/template/Toolbar.vue";
import Carousel from "@/components/widgets/Carousel.vue";
import Footer from "@/components/template/Footer.vue";

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
