<template>
  <div class="alarm-tool">
  <div class="alarm-tool-overlay" @click="$emit('close-alarm-tool')"></div>
    <div class="alarm-tool-card">
      <h3 style="margin: 10px;">페이지 알림 설정</h3>
      
      <v-divider></v-divider>
      <h4>최근 알림</h4>
      <p>name : 페이지 업데이트</p>
      <p>~~월~~일 . Repository</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.alarm-tool,
.alarm-tool-overlay{
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
}
.alarm-tool-overlay{
  opacity: 0.5;
  background-color: black;
}
.alarm-tool-card{
  position: fixed;
  width: 21vw;
  min-height: 90vh;
  margin: 58px 0px;
  right: 0;
  z-index: 10;
  background-color: white;
  border-radius: 10px;
  opacity: 1;
}
</style>