<template>
  <div class="main">
      <h2 style="margin-top: 30px; margin-left: 30px; color: white">공지사항</h2>
    
    <!-- <v-divider></v-divider> -->
    
    <!-- <div> -->
      <v-combobox
        multiple
        :items="['게시글', '작성자']"
        style="
          width: 220px;
          height: 10px;
          margin-top: 70px;
          margin-right: 20px;
          color: white;
          float: right;
          width: 400px;
          position: absolute;
        "
      ></v-combobox>
      <input
        style="
          border: white solid 1px;
          color: white;
          float: right;
          margin-top: 80px;
          margin-right: 80px;
          height: 30px;
        "
      />
      <div style="color: white; background-color: #111; height: auto; margin-top: 200px; float: left;">
      <v-list v-for="i in 5" :key="i" style="background: #111; color: white"
        >{{ i }}.</v-list
      >
    </div>
    <!-- </div> -->
    
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>