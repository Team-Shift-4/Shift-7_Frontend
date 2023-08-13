<template>
  <v-card>
    <v-layout>
      <Default>
      </Default>
      <v-main style="height: 100vh">
        <View />
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import Default from "./layouts/default/Default.vue";
import Settings from "./components/Settings.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const cogPage = () => {
  router.push({ name: 'Setting'});
};

const drawer = ref(true);
const rail = ref(true);
</script>

<script>
export default {
  components: [Settings, Default],
  data() {
    return {
      drawer: true,
      rail: true,
    };
  },
};
</script>

<style>
.mdi-menu-icons {
  margin: 0px 7px;
}
.v-list-item-title {
  font-size: 12px;
}
.v-main {
  z-index: 900;
}
</style>