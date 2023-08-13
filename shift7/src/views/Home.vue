
<template>
    <div class="main">
      <v-card
        class="overflow-y-auto"
        style="margin: 20px 20px; height: 100vh; width: 35vw;"
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
      <v-card
        class="overflow-y-auto"
        style="margin: 20px 20px; height: 100vh; width: 35vw;"
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
        <PageRightSideNav/>
      </div>
      
    </template>
  
  <script setup>
  import PageRightSideNav from '@/layouts/default/PageRightSideNav.vue'
    
  </script>
  
  <script>
  export default {
      components : [
        PageRightSideNav,
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
  </style>