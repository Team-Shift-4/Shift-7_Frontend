<template>
  <v-card-list>
    <v-layout>
      <v-app>
        <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          permanent
          @click="rail = false"
          style="
            background: #111;
            border-right: 1px solid #767676;
            color: white;
          "
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
              @click="SearchsModal = true"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-clock-outline"
              title="업데이트"
              value="clock"
              @click="UpdatesModal = true"
            ></v-list-item>
            <v-list-item
              badge
              prepend-icon="mdi-star-outline"
              title="즐겨찾기"
              value="star"
              @click="FavoritessModal = true"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-bell-badge-outline"
              title="알림"
              value="bell"
              @click="AlarmsModal = true"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-file-document-outline"
              title="최근기록"
              value="file"
              @click="RecentrecordssModal = true"
            ></v-list-item>
            <!-- <v-list-item
              prepend-icon="mdi-cog-outline"
              title="설정"
              value="cog"
            ></v-list-item> -->
            <v-list-item prepend-icon="mdi-cog-outline" value="cog1"
              ><Settings />
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list>
            <v-list-item
              class="title-font"
              prepend-icon="mdi-chevron-right"
              title="MyPage"
              value="chevron1"
              @click="clickMyPage"
              ><router-link :to="{ name: 'mypage' }"></router-link
            ></v-list-item>

            <v-list-item
              class="title-font"
              prepend-icon="mdi-chevron-right"
              title="DocumentPage"
              value="chevron2"
              @click="clickDocPage"
              ><router-link :to="{ name: 'doc' }"></router-link
            ></v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list> </v-list>
          <v-divider></v-divider>
          <v-list>
            <v-list-item
              prepend-icon="mdi-chevron-right"
              title="공지사항"
              value="chevron-1"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-chevron-right"
              title="타임로그 / 히스토리"
              value="chevron-2"
              @click="clickTHPage"
              ><router-link :to="{ name: 'th' }"></router-link
            ></v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main style="height: 100vh">
          <HeaderTool />
          <router-view />
          <SearchModal
            v-if="SearchsModal"
            @close-search-modal="SearchsModal = false"
          ></SearchModal>
          <UpdateModal
            v-if="UpdatesModal"
            @close-update-modal="UpdatesModal = false"
          ></UpdateModal>
          <FavoritesModal
            v-if="FavoritessModal"
            @close-favorites-modal="FavoritessModal = false"
          ></FavoritesModal>
          <AlarmModal
            v-if="AlarmsModal"
            @close-alarm-modal="AlarmsModal = false"
          ></AlarmModal>
          <RecentrecordsModal
            v-if="RecentrecordssModal"
            @close-recentrecords-modal="RecentrecordssModal = false"
          ></RecentrecordsModal>
        </v-main>
      </v-app>
    </v-layout>
  </v-card-list>
</template>
  
  <script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Settings from "./Settings.vue";
import HeaderTool from "./HeaderTool.vue";
import DocumentPage from "./DocumentPage.vue";
import MyPage from "./MyPage.vue";
import TimelogHistoryPage from "./TimelogHistoryPage.vue";
import SearchModal from "./SearchsModal.vue";
import UpdateModal from "./UpdatesModal.vue";
import FavoritesModal from "./FavoritesModal.vue";
import AlarmModal from "./AlarmModal.vue";
import RecentrecordsModal from "./RecentrecordsModal.vue";

const router = useRouter();

const drawer = ref(true);
const rail = ref(true);
</script>
  <script>
export default {
  components: [
    Settings,
    HeaderTool,
    DocumentPage,
    MyPage,
    TimelogHistoryPage,
    SearchModal,
    UpdateModal,
    FavoritesModal,
    AlarmModal,
    RecentrecordsModal,
  ],
  data() {
    return {
      drawer: true,
      rail: true,
      SearchsModal: false,
      UpdatesModal: false,
      FavoritessModal: false,
      AlarmsModal: false,
      RecentrecordssModal: false,
    };
  },
  methods: {
    clickMyPage() {
      this.$router.push({
        name: "mypage",
      });
    },
    clickDocPage() {
      this.$router.push({
        name: "doc",
      });
    },
    clickTHPage() {
      this.$router.push({
        name: "th",
      });
    },
  },
};
</script>

  <style>
.left-side-nav {
  background: #111;
  border-right: 1px solid #767676;
}
</style>