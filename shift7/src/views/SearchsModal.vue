<template>
    <div class="modal">
      <div class="overlay" @click="$emit('close-modal')"></div>
      <div class="modal-card">
        <h1>title</h1>
        <h2>Content</h2>
        <p>zxcvb</p>
        <!-- <slot /> -->
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style>
  /* Modal */
  .modal,
  .overlay {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
  }
  .overlay {
    opacity: 0.5;
    background-color: black;
  }
  .modal-card {
    position: relative;
    max-width: 80%;
    margin: auto;
    margin-top: 90px;
    padding: 20px;
    background-color: white;
    min-height: 500px;
    z-index: 10;
    opacity: 1;
  }
  </style>