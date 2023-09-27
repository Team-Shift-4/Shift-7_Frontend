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
            @click="TeamTools = !TeamTools"
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
          <div
            style="
              height: 619px;
              width: 100%;
              overflow-y: auto;
              overflow-x: hidden;
            "
          >
            <div
              style="
                background: rgba(255, 255, 255, 0.9);
                color: #111;
                position: absolute;
                display: block;
                margin: auto;
                width: 300px;
                height: auto;
                z-index: 10;
                border-radius: 10px;
              "
              v-if="rail == false"
            >
              <v-list class="Unfold_List_Item" v-if="TeamTools"
                ><div style="float: left">user@mail.com</div>
                <v-btn
                  icon
                  style="
                    float: right;
                    height: 24px;
                    width: 24px;
                    background: rgba(255, 255, 255, 0);
                    margin: 2px 10px;
                  "
                  @click="
                    Unfold_List_Dots_ListTools = !Unfold_List_Dots_ListTools
                  "
                  ><v-icon>mdi-dots-horizontal</v-icon> </v-btn
                ><br />
                <div>Team Project1</div>
                <div>Team Project2</div>
                <div>Team Project3</div>
                <v-divider></v-divider>

                <div>추가</div>
                <div>편집</div>
              </v-list>
            </div>
            <div
              style="
                background: rgba(255, 255, 255, 0.9);
                color: #111;
                position: absolute;
                z-index: 11;
                margin: 40px 180px;
                width: 200px;
              "
              v-if="TeamTools == true"
            >
              <v-list v-if="Unfold_List_Dots_ListTools" :items="ULDLTs">
              </v-list>
            </div>
            <v-divider></v-divider>
            <!-- ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ -->
            <div v-if="rail == true">
              <v-list-item
                v-if="ClickMenuItems"
                prepend-icon="mdi-chevron-down"
                title="메뉴"
                value="menu-chevron-down-1"
                @click="ClickMenuItems = !ClickMenuItems"
              ></v-list-item>
              <v-list-item
                v-else
                prepend-icon="mdi-chevron-right"
                title="메뉴"
                value="menu-chevron-right-1"
                @click="ClickMenuItems = !ClickMenuItems"
              ></v-list-item>
            </div>
            <div v-else-if="rail == false">
              <v-list-item
                v-if="ClickMenuItems"
                style="margin-left: 20px"
                prepend-icon="mdi-chevron-down"
                title="메뉴"
                value="menu-chevron-down-2"
                @click="ClickMenuItems = !ClickMenuItems"
              ></v-list-item>
              <v-list-item
                v-else
                prepend-icon="mdi-chevron-right"
                title="메뉴"
                value="menu-chevron-right-2"
                @click="ClickMenuItems = !ClickMenuItems"
              ></v-list-item>
            </div>
            <v-list density="compact" nav v-if="ClickMenuItems">
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
              <v-list-item
                prepend-icon="mdi-cog-outline"
                title="설정"
                value="cog"
                @click="clickSetDialog"
                ref="Setting_Com"
              ></v-list-item>
              <Settings ref="Setting_Com" />
              <div style="margin: 20px"></div>
            </v-list>
            <!-- ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ -->
            <v-divider></v-divider>
            <div v-if="rail == true">
              <v-list-item
                v-if="ClickShareItems"
                prepend-icon="mdi-chevron-down"
                title="공유된 페이지"
                value="share-chevron-down-1"
                @click="ClickShareItems = !ClickShareItems"
              ></v-list-item>
              <v-list-item
                v-else
                prepend-icon="mdi-chevron-right"
                title="공유된 페이지"
                value="share-chevron-right-1"
                @click="ClickShareItems = !ClickShareItems"
              ></v-list-item>
            </div>
            <div v-if="rail == false">
              <v-list-item
                v-if="ClickShareItems"
                style="margin-left: 20px"
                prepend-icon="mdi-chevron-down"
                title="공유된 페이지"
                value="share-chevron-down-2"
                @click="ClickShareItems = !ClickShareItems"
              ></v-list-item>
              <v-list-item
                v-else
                prepend-icon="mdi-chevron-right"
                title="공유된 페이지"
                value="share-chevron-right-2"
                @click="ClickShareItems = !ClickShareItems"
              ></v-list-item>
            </div>
            <v-list v-if="ClickShareItems">
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
            <!-- ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ -->
            <v-divider></v-divider>
            <div v-if="rail == true">
              <v-list-item
                v-if="ClickIndividualItems"
                prepend-icon="mdi-chevron-down"
                value="individual-chevron-down-1"
                @click="ClickIndividualItems = !ClickIndividualItems"
                ></v-list-item
              >
              <v-list-item
                v-else
                prepend-icon="mdi-chevron-right"
                value="individual-chevron-right-1"
                @click="ClickIndividualItems = !ClickIndividualItems"
              ></v-list-item>
            </div>
            <div v-if="rail == false">
              <v-list-item
                v-if="ClickIndividualItems"
                style="margin-left: 20px"
                prepend-icon="mdi-chevron-down"
                value="individual-chevron-down-2"
                @click="ClickIndividualItems = !ClickIndividualItems"
                ><div style="font-size: 12px; margin-top: 5px">
                  개인 페이지<v-btn
                    icon
                    style="
                      width: 24px;
                      height: 24px;
                      float: right;
                      background: #111;
                    "
                    @click="DocumentCreativesModal = !DocumentCreativesModal"
                    ><v-icon>mdi-plus</v-icon></v-btn
                  >
                </div></v-list-item
              >
              <v-list-item
                v-else
                prepend-icon="mdi-chevron-right"
                value="individual-chevron-right-2"
                @click="ClickIndividualItems = !ClickIndividualItems"
                ><div style="font-size: 12px; margin-top: 5px">
                  개인 페이지<v-btn
                    icon
                    style="
                      width: 24px;
                      height: 24px;
                      float: right;
                      background: #111;
                    "
                    @click="DocumentCreativesModal = !DocumentCreativesModal"
                    ><v-icon>mdi-plus</v-icon></v-btn
                  >
                </div></v-list-item
              >
            </div>
            <v-list v-if="ClickIndividualItems">
              <v-list-item
                v-for="repositorylist in repositorylists"
                :key="repositorylist"
                @click="clickRepoPage"
                >
                {{ repositorylist }}
                <!-- <router-link :to="{ name: '' }"></router-link> -->
                </v-list-item
              >
              <v-list-item>2</v-list-item>
              <v-list-item>3</v-list-item>
            </v-list>
            <!-- ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ -->
            <v-divider></v-divider>
            <div v-if="rail == true">
              <v-list-item
                v-if="ClickTeamItems"
                prepend-icon="mdi-chevron-down"
                title="팀스페이스"
                value="team-chevron-down-1"
                @click="ClickTeamItems = !ClickTeamItems"
              ></v-list-item>
              <v-list-item
                v-else
                prepend-icon="mdi-chevron-right"
                title="팀스페이스"
                value="team-chevron-right-1"
                @click="ClickTeamItems = !ClickTeamItems"
              ></v-list-item>
            </div>
            <div v-if="rail == false">
              <v-list-item
                v-if="ClickTeamItems"
                style="margin-left: 20px"
                prepend-icon="mdi-chevron-down"
                title="팀스페이스"
                value="team-chevron-down-2"
                @click="ClickTeamItems = !ClickTeamItems"
              ></v-list-item>
              <v-list-item
                v-else
                prepend-icon="mdi-chevron-right"
                title="팀스페이스"
                value="team-chevron-right-2"
                @click="ClickTeamItems = !ClickTeamItems"
              ></v-list-item>
            </div>
            <v-list v-if="ClickTeamItems">
              <v-list-item
                prepend-icon="mdi-chevron-right"
                title="공지사항"
                value="chevron-1"
                @click="clickAnPage"
                ><router-link :to="{ name: 'an' }"></router-link
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-chevron-right"
                title="타임로그 / 히스토리"
                value="chevron-2"
                @click="clickTHPage"
                ><router-link :to="{ name: 'th' }"></router-link
              ></v-list-item>
            </v-list>
            <!-- ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ -->
          </div>
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
          <DocumentCreativeModal
          @document-creative="addRepositoryLists"
            v-if="DocumentCreativesModal"
            @close-creative-modal="DocumentCreativesModal = false"
          ></DocumentCreativeModal>
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
import DocumentCreativeModal from "./DocumentCreativeModal.vue";
import AnnouncementPage from "./AnnouncementPage.vue";

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
    DocumentCreativeModal,
    AnnouncementPage,
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
      DocumentCreativesModal: false,
      TeamTools: false,
      Unfold_List_Dots_ListTools: false,
      ClickMenuItems: false,
      ClickShareItems: false,
      ClickIndividualItems: false,
      ClickTeamItems: false,
      repositorylists: [],
      ULDLTs: [
        { title: "Create a team", value: "test5" },
        { title: "편집", value: "test6" },
      ],
    };
  },
  created( ) {
    
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
    clickAnPage() {
      this.$router.push({
        name: "an",
      });
    },
    clickSetDialog() {
      this.$refs.Setting_Com.dialog = "true";
    },
    // clickRepoPage() {
    //   this.router.push({
    //     name: "",
    //   });
    // },
    addRepositoryLists(creativeinput) {
      this.repositorylists.push(creativeinput);
      // 라우터 링크 추가
    },
  },
  
};
</script>

  <style>
</style>