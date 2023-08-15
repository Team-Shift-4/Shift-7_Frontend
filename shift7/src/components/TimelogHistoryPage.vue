<template>
    <v-app>
  <v-timeline class="timelog" direction="horizontal">
    <v-timeline-item>
      <template v-slot:opposite>
        Opposite content
      </template>
    </v-timeline-item>
    
  </v-timeline>
  <v-divider style="width: 80%; margin: 0px 20px;"></v-divider>
  <div style="height: 60%; background: #111;">
    <h1 style="color: white; margin: 30px 50px;">`23.08.15 History</h1>
    <p style="color: white; margin: 5px 50px;">1.</p>
    <p style="color: white; margin: 5px 50px;">2.</p>
  </div>
  </v-app>
</template>

<script>
export default {

}
</script>

<style scoped>
.timelog {
    background: #111;
    color: white;
    height: 40%;
}
</style>