<template>
  <v-card class="right-side-main-var">
    <v-card-title style="margin: 5px 5px">
      <v-btn style="width: 240px" variant="text">
        1. What is Lorem Ipsum?</v-btn
      >
      <br />
      <v-btn style="width: 240px" variant="text">
        2. Where does it come ...</v-btn
      ><br />
    </v-card-title>

    <v-card-subtitle>
      <v-divider style="width: 100%; color: #111"></v-divider>
      <v-card style="width: 100%; height: 130px; margin: 10px 0px">
        <span style="float: left; margin: 5px 20px">name</span>
        <span style="float: right; margin: 5px 20px">--.--.--</span>
        <v-divider
          style="width: 90%; margin: 0px 12px; margin-top: 30px"
        ></v-divider>
        <span style="margin: 0px 20px">s</span>
      </v-card>
    </v-card-subtitle>
    <v-card style="width: 89%; height: 50px; margin: 0px 16px"> 
      
      <v-text-field
        variant="underlined"
        style="width: 95%; margin: 0px 5px"
      ></v-text-field>
      
    </v-card>
  </v-card>
</template>

<script setup>
//
</script>

<style>
.right-side-main-var {
  height: 100vh;
  width: 300px;
}
</style>