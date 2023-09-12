<template>
  <v-toolbar
    density="comfortable"
    title="Application"
    style="
      height: 57px;
      background: #111;
      color: white;
      border-bottom: 1px solid #767676;
    "
  >
    <v-spacer></v-spacer>

    <v-btn icon>
      <!-- <v-icon>mdi-cog</v-icon> -->
      <v-icon>mdi-file-edit-outline</v-icon>
      <!-- 설정 -->
    </v-btn>

    <v-btn icon @click="AlarmTools = true">
      <v-icon>mdi-bell-badge-outline</v-icon>
      <!-- 알림 현황 -->
    </v-btn>

    <v-btn icon @click="UpdateTools = true">
      <v-icon>mdi-clock-outline</v-icon>
      <!-- 전체 파일 업데이트 현황 -->
    </v-btn>

    <v-btn icon @click="Star()">
      
      <v-icon v-if="StarTools=true">mdi-star</v-icon>
      <v-icon v-if="StarTools=false">mdi-star-outline</v-icon>
      <!-- 현재 페이지 즐겨찾기 추가 -->
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-horizontal</v-icon>
      <!-- 더보기 -->
    </v-btn>
  </v-toolbar>
  <AlarmTool v-if="AlarmTools" @close-alarm-tool="AlarmTools = false" />
  <UpdateTool v-if="UpdateTools" @close-update-tool="UpdateTools = false" />
</template>
  
  <script setup>
import AlarmTool from "./AlarmTool.vue";
import UpdateTool from "./UpdateTool.vue";
</script>
  <script>
export default {
  components: {
    AlarmTool,UpdateTool,
  },
  data() {
    return {
      AlarmTools: false,
      UpdateTools: false,
      StarTools: false,
    };
  },
  methods: {
    Star() {
      if(this.StarTools==true){
        this.StarTools=false;
      } else if(this.StarTools==false){
        this.StarTools=true;
      }
    },
  },
};
</script>