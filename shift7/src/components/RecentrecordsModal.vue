<template>
  <div class="Recentrecords-modal">
    <div
      class="Recentrecords-overlay"
      @click="$emit('close-recentrecords-modal')"
    ></div>
    <div class="Recentrecords-modal-card">
      <p>최근 기록</p>
      <v-divider></v-divider>
      <p>옵션</p>

      <!-- <slot /> -->
    </div>
  </div>
</template>
  
  <script>
export default {};
</script>
  
  <style>
/* Modal */
.Recentrecords-modal,
.Recentrecords-overlay {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
}
.Recentrecords-overlay {
  opacity: 0.5;
  background-color: black;
}
.Recentrecords-modal-card {
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