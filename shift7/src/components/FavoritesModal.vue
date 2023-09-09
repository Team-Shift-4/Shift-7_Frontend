<template>
  <div class="Favorites-modal">
    <div
      class="Favorites-overlay"
      @click="$emit('close-favorites-modal')"
    ></div>
    <div class="Favorites-modal-card">
      <p>즐겨찾기 페이지</p>
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
.Favorites-modal,
.Favorites-overlay {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
}
.Favorites-overlay {
  opacity: 0.5;
  background-color: black;
}
.Favorites-modal-card {
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