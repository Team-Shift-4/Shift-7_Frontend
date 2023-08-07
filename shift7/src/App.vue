<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item class="mdi-menu-icons" 
        prepend-icon="mdi-menu"
          title="Repository"
          value="menu"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-magnify" title="검색" value="magnify"></v-list-item>
          <v-list-item prepend-icon="mdi-clock-outline" title="업데이트" value="clock"></v-list-item>
          <v-list-item prepend-icon="mdi-star-outline" title="즐겨찾기" value="star"></v-list-item>
          <v-list-item prepend-icon="mdi-bell-badge-outline" title="알림" value="bell"></v-list-item>
          <v-list-item prepend-icon="mdi-file-document-outline" title="최근기록" value="file"></v-list-item>
          <v-list-item prepend-icon="mdi-cog-outline" title="설정" value="cog"></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-list-item class="title-font" prepend-icon="mdi-chevron-right" title=" " value="chevron"></v-list-item>

        </v-list>
        <v-divider></v-divider>
        <v-list>
          
        </v-list>
        <v-divider></v-divider>
        <v-list>
            <v-list-item prepend-icon="mdi-chevron-right" title="공지사항" value="chevron"></v-list-item>
          <v-list-item prepend-icon="mdi-chevron-right" title="타임로그 / 히스토리" value="chevron"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 100vh"></v-main>
    </v-layout>
  </v-card>
  
  <router-view />
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(true)
  const rail = ref(true)
</script>

<script>
  export default {
    data () {
      return {
        drawer: true,
        rail: true,
      }
    },
  }
</script>

<style>
.mdi-menu-icons {
  margin:   0px 7px;
}
.v-list-item-title {
  font-size: 12px;
}
</style>