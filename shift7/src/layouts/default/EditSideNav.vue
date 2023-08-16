<template>
  <v-card class="right-side-edit-nav overflow-y-auto">
    <v-card-text>
      <v-btn style="margin: 5px 12px;">
        <v-icon icon="mdi-format-italic" style="width: 50%;"></v-icon>
      </v-btn>
      <v-btn style="float: right; margin: 5px 12px;">
        <v-icon icon="mdi-format-bold" style="width: 50%;"></v-icon>
      </v-btn>

      <v-btn style="margin: 5px 12px;">
        <v-icon icon="mdi-format-underline" style="width: 50%;"></v-icon>
      </v-btn>

      <v-btn style="float: right; margin: 5px 12px;">
        <v-icon icon="mdi-format-color-text" style="width: 50%;"></v-icon>
      </v-btn>

      <v-btn
        v-for="(i, a) in 8"
        :key="a"
        class="mb-4"
        style="
          width: 260px;
          background-color: #111;
          color: white;
          border: 1px solid #777;
        "
      >
        {{ EditSet[a] }}
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      EditSet: [
        "형식",
        "목록",
        "체크리스트",
        "표",
        "그림",
        "링크",
        "저장(커밋)",
        "변경사항 적용안함",
      ],
    };
  },
};
</script>

<style>
.right-side-edit-nav {
  height: 100vh;
  width: 350px;
  background: #111;
  border-left: 1px solid #767676;
}
.edit-set {
  height: 80%;
  width: 260px;
}
</style>