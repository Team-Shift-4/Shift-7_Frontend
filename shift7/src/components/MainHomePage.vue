<template>
    <v-card >
      <v-layout >
        <v-app >
          <v-navigation-drawer
            v-model="drawer"
            :rail="rail"
            permanent
            @click="rail = false"
            style="background: #111; border-right: 1px solid #767676; color: white;"
          >
            <v-list-item
              class="mdi-menu-icons"
              prepend-icon="mdi-unfold-more-horizontal"
              title="Repository"
              value="menu"
              nav
            >
              <template v-slot:append>
                <v-btn
                  variant="text"
                  icon="mdi-chevron-left"
                  @click.stop="rail = !rail"
                >
                </v-btn>
              </template>
            </v-list-item>
            <v-divider></v-divider>
  
            <v-list density="compact" nav>
              <v-list-item
                prepend-icon="mdi-magnify"
                title="검색"
                value="magnify"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-clock-outline"
                title="업데이트"
                value="clock"
              ></v-list-item>
              <v-list-item
              badge
                prepend-icon="mdi-star-outline"
                title="즐겨찾기"
                value="star"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-bell-badge-outline"
                title="알림"
                value="bell"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-file-document-outline"
                title="최근기록"
                value="file"
              ></v-list-item>
              <router-link class="nav-link" active-class="active" to="/setting">
              <v-list-item 
              prepend-icon="mdi-cog-outline" 
              title="설정" 
              value="cog"
              type="button"
              @click="testClick"
                >
              </v-list-item>
            </router-link>
              <Settings></Settings>
            </v-list>
            <v-divider></v-divider>
            <v-list>
              <v-list-item
                class="title-font"
                prepend-icon="mdi-chevron-right"
                title=" "
                value="chevron"
              ></v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list> </v-list>
            <v-divider></v-divider>
            <v-list>
              <v-list-item
                prepend-icon="mdi-chevron-right"
                title="공지사항"
                value="chevron"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-chevron-right"
                title="타임로그 / 히스토리"
                value="chevron"
              ></v-list-item>
            </v-list>
          </v-navigation-drawer>
          <v-main style="height: 100vh">
          <HeaderTool/>
          <!-- <TimelogHistoryPage/> -->
          <!-- <MainPage/> -->
          <DocumentPage/>
          </v-main>
          <!-- <default-view /> -->
        </v-app>
      </v-layout>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import Settings from "./Settings.vue";
  import HeaderTool from "./HeaderTool.vue"
  import DocumentPage from "./DocumentPage.vue"
  // import MainPage from "./MyPage.vue"
  // import TimelogHistoryPage from "./TimelogHistoryPage.vue"
  import { useRouter } from "vue-router";

  const router = useRouter();
  const testClick = () => {
    router.push('/setting');
  };
  
  const drawer = ref(true);
  const rail = ref(true);
  </script>
  <script>
  export default {
    components: [Settings, HeaderTool, DocumentPage],
    data() {
      return {
        drawer: true,
        rail: true,
      };
    },
  };
  </script>

  <style>
  .left-side-nav{
    background: #111;
    border-right: 1px solid #767676;
  }
</style>