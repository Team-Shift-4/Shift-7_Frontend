
<template>
    <v-card
      class="overflow-y-auto"
      max-height="585"
      max-width="580"
      style="margin: 20px 20px;"
    >
      <v-banner
        class="justify-center text-h5 font-weight-light"
        sticky
      >
        My Work
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
  </template>

<script>
  export default {
    
  }
</script>

<style>

</style>