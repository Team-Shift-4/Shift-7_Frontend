<template>
  <div class="update-modal">
    <div class="update-overlay" @click="$emit('close-update-modal')"></div>
    <div class="update-modal-card">
      <v-btn>업데이트</v-btn><v-btn>수신</v-btn><v-btn>알림</v-btn
      ><v-btn>즐겨찾기</v-btn>
      <p>최근 업데이트 내역</p>
      <h4>
        1.title
        <h4 style="float: right">--.--.--</h4>
      </h4>
      <h4>
        2.title
        <h4 style="float: right">--.--.--</h4>
      </h4>
      <h4>
        3.title
        <h4 style="float: right">--.--.--</h4>
      </h4>
      <v-divider></v-divider>
      <p>전체 업데이트 내역</p>
      지난 7일
      <h4>
        12.title
        <h4 style="float: right">--.--.--</h4>
      </h4>
      <h4>
        14.title
        <h4 style="float: right">--.--.--</h4>
      </h4>
      <h4>
        17.title
        <h4 style="float: right">--.--.--</h4>
      </h4>
      지난 30일
      <h4>
        19.title
        <h4 style="float: right">--.--.--</h4>
      </h4>
      <h4>
        32.title
        <h4 style="float: right">--.--.--</h4>
      </h4>

      <!-- <slot /> -->
    </div>
  </div>
</template>
  
  <script>
export default {};
</script>
  
  <style>
/* Modal */
.update-modal,
.update-overlay {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
}
.update-overlay {
  opacity: 0.5;
  background-color: black;
}
.update-modal-card {
  position: relative;
  max-width: 60%;
  margin: auto;
  margin-top: 90px;
  margin-left: 272px;
  padding: 20px;
  background-color: white;
  min-height: 500px;
  z-index: 10;
  opacity: 1;
}
</style>