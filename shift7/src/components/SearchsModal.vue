<template>
  <div class="search-modal">
    <div class="search-overlay" @click="$emit('close-search-modal')"></div>
    <div class="search-modal-card">
      <v-text-field prepend-icon="mdi-magnify"></v-text-field>

      <p>옵션</p>
      <v-divider></v-divider>
      <p>최근 기록</p>
      <h4>aaa...</h4>
      <v-divider></v-divider>
      <p>이전 기록</p>
      <h4>bbb...</h4>
      <h4>ccc...</h4>
      <h4>ddd...</h4>
      <h4>abc...</h4>
      <h4>cab...</h4>
      <h4>bca...</h4>
      <!-- <slot /> -->
    </div>
  </div>
</template>
  
  <script>
export default {};
</script>
  
  <style>
/* Modal */
.search-modal,
.search-overlay {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
}
.search-overlay {
  opacity: 0.5;
  background-color: black;
}
.search-modal-card {
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