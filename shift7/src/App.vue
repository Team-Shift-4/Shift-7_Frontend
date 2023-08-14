<template>
  <v-app>
    <MainHomeCompo/>
  </v-app>
</template>

<script setup>
import MainHomeCompo from "./components/MainHomeComponent.vue";

</script>

<script>
export default {
  components: {MainHomeCompo},
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