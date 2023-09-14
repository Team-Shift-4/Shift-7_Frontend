<template>
  <div class="An_Main">
    <div>
      <h2 class="An_Title">공지사항</h2>
      <input
        style="
          border: white solid 1px;
          color: white;
          float: right;
          margin-top: 60px;
          margin-right: 80px;
        "
      />
      <v-combobox
        multiple
        :items="['게시글', '작성자']"
        style="
          width: 220px;
          height: 10px;
          margin-top: 50px;
          margin-right: 20px;
          position: relative;
          color: white;
          float: right;
        "
      ></v-combobox>
    </div>
    <div class="An_Content">
      <v-list v-for="i in 5" :key="i" style="background: #111; color: white"
        >{{ i }}.</v-list
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.An_Main {
  width: 100vw;
  height: 100vh;
  background: #111;
  position: absolute;
}
.An_Title {
  margin: 20px;
  color: white;
  position: fixed;
}
.An_Content {
  color: white;
  margin: 100px 40px;
  background: #111;
}
</style>