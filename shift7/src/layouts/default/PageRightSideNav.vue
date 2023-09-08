<template>
  <div class="right-side-main">
    <v-card class="right-side-main-nav">
      <v-card-title style="margin: 5px 5px">
        <v-btn style="width: 240px" variant="text">
          1. What is Lorem Ipsum?</v-btn
        >
        <br />
        <v-btn style="width: 240px" variant="text">
          2. Where does it come ...</v-btn
        ><br />
      </v-card-title>
    </v-card>
    <v-card-subtitle style="width: 90%; margin: 0px 14px; margin-top: 20px">
      <v-divider style="width: 100%; color: #111"></v-divider>
      <v-card style="width: 100%; height: 130px; margin: 10px 0px">
        <span style="float: left; margin: 5px 20px">name</span>
        <span style="float: right; margin: 5px 20px">--.--.--</span>
        <v-divider
          style="width: 90%; margin: 0px 12px; margin-top: 30px"
        ></v-divider>
        <span style="margin: 0px 20px">comment...</span>
      </v-card>
    </v-card-subtitle>
    
    <v-card
      style="
        width: 220px;
        height: 55px;
        background-color: #212121;
        color: white;
        position: absolute;
        bottom: 0%;
        margin: 20px 30px;
      "
    >
      <v-text-field
        label="Comment"
        variant="underlined"
        style="width: 85%; margin: 0px 15px"
      ></v-text-field>
    </v-card>
  </div>
</template>

<script setup>
//
</script>

<style>
.right-side-main {
  height: 100vh;
  width: 300px;
  border-left: 1px solid #767676;
}
.right-side-main-nav {
  background-color: #111;
  color: white;
}
</style>