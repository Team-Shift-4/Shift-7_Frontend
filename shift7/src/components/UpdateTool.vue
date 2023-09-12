<template>
    <div class="update-tool">
    <div class="update-tool-overlay" @click="$emit('close-update-tool')"></div>
      <div class="update-tool-card">
        <h3 style="margin: 10px;">업데이트 소식</h3>
        
        <v-divider></v-divider>
        <h4>최근 소식</h4>
        <p>name : 페이지 업데이트</p>
        <p>~~월~~일 . Repository</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  .update-tool,
  .update-tool-overlay{
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
  }
  .update-tool-overlay{
    opacity: 0.5;
    background-color: black;
  }
  .update-tool-card{
    position: fixed;
    width: 21vw;
    min-height: 90vh;
    margin: 58px 0px;
    right: 0;
    z-index: 10;
    background-color: white;
    border-radius: 10px;
    opacity: 1;
  }
  </style>