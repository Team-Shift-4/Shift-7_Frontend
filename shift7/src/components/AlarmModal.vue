<template>
  <div class="Alarm-modal">
    <div class="Alarm-overlay" @click="$emit('close-alarm-modal')"></div>
    <div class="Alarm-modal-card">
      <p>알림 내역</p>
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
.Alarm-modal,
.Alarm-overlay {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
}
.Alarm-overlay {
  opacity: 0.5;
  background-color: black;
}
.Alarm-modal-card {
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