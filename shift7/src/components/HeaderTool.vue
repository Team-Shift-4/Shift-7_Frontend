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
      <v-icon>mdi-cog</v-icon>
      <!-- 설정 -->
    </v-btn>

    <v-btn icon @click="AlarmTools = true">
      <v-icon>mdi-bell-badge-outline</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-clock-outline</v-icon>
      <!-- 전체 파일 업데이트 현황 -->
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-star-outline</v-icon>
      <!-- 현재 페이지 즐겨찾기 추가 -->
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-horizontal</v-icon>
      <!-- 더보기 -->
    </v-btn>
  </v-toolbar>
  <AlarmTool v-if="AlarmTools" @close-alarm-tool="AlarmTools = false" />
</template>
  
  <script setup>
import AlarmTool from "./AlarmTool.vue";
</script>
  <script>
export default {
  components: {
    AlarmTool,
  },
  data() {
    return {
      AlarmTools: false,
    };
  },
};
</script>