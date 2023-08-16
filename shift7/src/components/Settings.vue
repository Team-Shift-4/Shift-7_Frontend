<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          dark
          v-bind="props"
          style="width: 90%; height: 40px; padding: 4px 8px; margin: 0px 0px 4px; background: #111;"
        >
          <v-icon style="width: 56px; height: 24px; ">mdi-cog-outline</v-icon>
          <span style="width: 167px; height: 16px; font-size: 13px;">설정</span>
        </v-btn>
        
      </template>
      <v-card>
        <v-toolbar
          dark
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              variant="text"
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          lines="two"
          subheader
        >
          <v-list-subheader prepend-icon="mdi-chevron-right">레포지토리 (Repository)</v-list-subheader>
          <v-list-item prepend-icon="mdi-chevron-down" title="레포지토리 정보(Repository information)" subtitle=" "></v-list-item>
          <v-divider></v-divider>
          <v-list-item title="레포지토리 문서 영역(폴더 구분) / Repository document area (folder division)" subtitle=" " style="margin: 0px 20px"></v-list-item>
          <v-divider></v-divider>
          <v-list-item title="레포지토리 어드민 / Repository Admin" subtitle=" " style="margin: 0px 20px"></v-list-item>
          <v-divider></v-divider>
          <v-list-item title="권한" subtitle=" " style="margin: 0px 20px"></v-list-item>
        </v-list>
        <v-list
          lines="two"
          subheader
        >
        <v-list-subheader>알림 (alarm)</v-list-subheader>
        <v-list-item prepend-icon="mdi-chevron-down" title="알림 설정 (notification settings)" subtitle=" "></v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      }
    }
  }
</script>

<style>
/* .dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform .2s ease-in-out;
} */

</style>