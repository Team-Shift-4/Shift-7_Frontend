
<template>
  <div class="main">
    <v-card
      class="overflow-y-auto"
      style="margin: 10px 50px; height: 89vh; width: 41vw;"
    >
      <v-banner
        class="justify-center text-h5 font-weight-light"
        sticky
      >
      <h1>My Work</h1>
      </v-banner>
  
      <v-card-text>
        <div
          v-for="n in 12"
          :key="n"
          class="mb-4"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi commodi earum tenetur. Asperiores dolorem placeat ab nobis iusto culpa, autem molestias molestiae quidem pariatur. Debitis beatae expedita nam facere perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ducimus cupiditate rerum officiis consequuntur laborum doloremque quaerat ipsa voluptates, nobis nam quis nulla ullam at corporis, similique ratione quasi illo!
        </div>
        
      </v-card-text>
      
    </v-card>
    <div class="l-line"></div>
    <v-card
      class="overflow-y-auto"
      style="margin: 10px 50px; height: 89vh; width: 41vw;"
    >
      <v-banner
        class="justify-center text-h5 font-weight-light"
        sticky
      >
      <h1>My Goal</h1>
      </v-banner>
  
      <v-card-text>
        <div
          v-for="n in 12"
          :key="n"
          class="mb-4"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi commodi earum tenetur. Asperiores dolorem placeat ab nobis iusto culpa, autem molestias molestiae quidem pariatur. Debitis beatae expedita nam facere perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ducimus cupiditate rerum officiis consequuntur laborum doloremque quaerat ipsa voluptates, nobis nam quis nulla ullam at corporis, similique ratione quasi illo!
        </div>
        
      </v-card-text>
      
    </v-card>
    <v-spacer></v-spacer>
    </div>
    
  </template>

<script setup>
</script>

<script>
export default {
    components : [
    ],
}
</script>

<style>
.main {
  display: flex;
  background-color: #111;
}
h1 {
  font-weight: 300;
}
.l-line{
  margin: 40px 0px;
  border-left : 0.5px solid #767676;

    height : 80vh;
}
</style>