<template>
  <v-app>
    <MainHomePage/>
  </v-app>
</template>

<script setup>
import MainHomePage from "./components/MainHomePage.vue";

</script>

<script>
export default {
  components: {MainHomePage},
};
</script>

<style>
.mdi-menu-icons {
  margin: 0px 7px;
}
.v-list-item-title {
  font-size: 12px;
}
</style>