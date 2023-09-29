<template>
  <div class="main">
    <v-card
      class="overflow-y-auto"
      style="
        margin: 30px 30px;
        height: 89vh;
        width: 41vw;
        background-color: #111;
        color: #989898;
      "
    >
      <v-banner
        class="text-h5 font-weight-light"
        sticky
        style="background-color: #111; color: white"
        ><h1>Test Document File</h1></v-banner
      >

      <v-subtitle style="margin: 16px; color: #ffffff94"
        >1. Examples</v-subtitle
      >
      <v-card-text>
        <div class="mb-4" style="color: #767676">
          Throughout the JavaScript API listings, short code examples illustrate
          how the API is used. You can experiment with most of these examples
          using the console in the Toolbox. However, you need Toolbox running in
          the context of a web extension. To do this, open about:debugging then
          This Firefox, click Inspect against any installed or temporary
          extension, and open Console. You can then paste and run the example
          code in the console.
        </div>
      </v-card-text>
      <div
        v-for="(documentfilelist, index) in (document_file_list_title,
        document_file_list_contents)"
        :key="index"
      >
        <v-subtitle style="margin: 16px; color: #ffffff94">{{
          document_file_list_title[index]
        }}</v-subtitle>
        <v-btn
          icon
          style="width: 24px; height: 24px; background-color: #111"
          @click="removeContents(documentfilelist, index)"
          >X</v-btn
        >
        <v-card-text>
          <div class="mb-4" style="color: #767676">
            {{ documentfilelist }}
          </div>
        </v-card-text>
      </div>
    </v-card>

    <div class="l-line"></div>
    <div style="margin: 30px 70px">
      <v-card style="position: relative; background-color: #111">
        <v-card-title style="color: white">SubTitle</v-card-title>
        <input
          style="
            background-color: #111;
            height: 50px;
            width: 40vw;
            color: white;
            border: white 0.1px solid;
            margin-left: 2px;
          "
          v-model="subtitleinput"
        />
      </v-card>
      <v-card
        style="position: relative; background-color: #111; margin-top: 15px"
      >
        <v-card-title style="color: white">File Contents</v-card-title>
        <textarea
          style="
            width: 40vw;
            height: 50vh;
            color: white;
            border: white 0.1px solid;
            margin-left: 1px;
          "
          v-model="filecontentsinput"
          @keyup.shift.enter="printSubmitEvent"
        ></textarea>
      </v-card>
      <v-btn
        style="
          background-color: #232323;
          color: white;
          float: right;
          margin-top: 15px;
        "
        @click="pageSubmitEvent"
        >저장</v-btn
      >
      <v-btn
        style="
          background-color: #232323;
          color: white;
          float: right;
          margin-top: 15px;
          margin-right: 10px;
        "
        @click="addRegistration"
        >등록</v-btn
      >
      
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      subtitleinput: "",
      filecontentsinput: "",
      document_file_list_title: [],
      document_file_list_contents: [],
    };
  },
  created() {
    if (sessionStorage.length > 0) {
      for (var i = 0; i < sessionStorage.length; i++) {
        this.document_file_list_title.push(sessionStorage.key(i));
        this.document_file_list_contents.push(
          sessionStorage.getItem(sessionStorage.key(i))
        );
      }
      this.document_file_list_title.sort();
      this.document_file_list_contents.sort();
    }
  },
  methods: {
    addRegistration() {
      if (this.subtitleinput !== "" && this.filecontentsinput !== "") {
        var title_input_value = this.subtitleinput && this.subtitleinput.trim();
        var content_input_value =
          this.filecontentsinput && this.filecontentsinput.trim();
        sessionStorage.setItem(title_input_value, content_input_value);
        this.clearInputbox();
        history.go(0);
      }
    },
    printSubmitEvent() {
      this.addRegistration();
    },
    clearInputbox() {
      this.subtitleinput = "";
      this.filecontentsinput = "";
    },
    removeContents(documentfilelist, index) {
      for (let i = 0; i < sessionStorage.length; i++) {
        if (sessionStorage.getItem(sessionStorage.key(i)) == documentfilelist) {
          sessionStorage.removeItem(sessionStorage.key(i));
          break;
        }
        console.log(sessionStorage.key(i));
      }
      this.document_file_list_title.splice(index, 1);
      this.document_file_list_contents.splice(index, 1);
    },
    pageSubmitEvent() {

    },
  },
};
</script>

<style>
.main {
  height: 100vh;
  background-color: #111;
  color: white;
}
.l-line {
  margin: 40px 0px;
  border-left: 0.5px solid #767676;

  height: 80vh;
}
</style>