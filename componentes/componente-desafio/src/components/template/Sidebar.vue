<template>
  <v-navigation-drawer app>
    <MenuToolbar />
    <v-divider></v-divider>
    <MenuItens />
  </v-navigation-drawer>
</template>

<script>
import MenuToolbar from "./MenuToolbar.vue";
import MenuItens from "./MenuItens.vue";

export default {
  name: "appSidebar",
  components: {
    MenuToolbar,
    MenuItens,
  },
};
</script>

<style>
</style>