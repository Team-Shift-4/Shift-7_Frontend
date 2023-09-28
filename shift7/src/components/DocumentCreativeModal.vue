<!-- MainHomePage -> repositorylists 배열에 값 저장후 링크 생성 -->
<template>
  <div class="Document-creative-modal">
    <div
      class="Document-creative-overlay"
      @click="$emit('close-creative-modal')"
    ></div>
    <div class="Document-creative-modal-card">
      <input
        type="text"
        v-model="creativeinput"
        placeholder="생성할 파일 제목을 입력하세요."
        style="width: 80%; height: 40px"
        @keyup.enter="creativeSubmitEvent"
      />
      <v-btn
        @click="addDocument"
        style="float: right; background-color: #111; color: white"
        >추가</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      creativeinput: "",
    };
  },
  methods: {
    addDocument() {
      if (this.creativeinput !== "") {
        this.$emit('documentCreative', this.creativeinput);
        this.clearDocumentInputbox();
      }
    },
    creativeSubmitEvent() {
      this.addDocument();
    },
    clearDocumentInputbox() {
      this.creativeinput = "";
    },
  },
};
</script>

<style>
.Document-creative-modal,
.Document-creative-overlay {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
}
.Document-creative-overlay {
  opacity: 0.5;
  background-color: black;
}
.Document-creative-modal-card {
  position: relative;
  max-width: 60%;
  margin: auto;
  margin-top: 90px;
  margin-left: 272px;
  padding: 20px;
  background-color: white;
  min-height: 50px;
  z-index: 10;
  opacity: 1;
}
</style>