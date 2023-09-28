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
      <!-- <div v-for=""> -->
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
    <!-- </div> -->
    </v-card>
    <div class="l-line"></div>
    <div style="margin: 30px 70px">
      <v-card style="position: relative; background-color: #111">
        <v-card-title style="color: white">SubTitle</v-card-title>
        <input
          style="
            background-color: #111;
            height: 50px;
            width: 41vw;
            color: white;
            border: white 0.1px solid;
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
            width: 41vw;
            height: 50vh;
            color: white;
            border: white 0.1px solid;
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
            documentfilelists: [
                {
                    title: "",
                    contents: "",
                },
            ],
            
                
        };
    },
    methods: {
        addRegistration() {
            if (this.subtitleinput !== "" && this.filecontentsinput !== ""){
                // this.documentfilelists.documentfile.title = this.subtitleinput;
                this.documentfilelists.title.push(this.subtitleinput);
                console.log(this.documentfilelists.title.value);
                console.log(12);
                this.documentfilelists.contents = this.filecontentsinput;
                console.log(this.documentfilelists.contents);
                this.clearInputbox();
                // history.go(0);
            }
        },
        printSubmitEvent() {
            this.addRegistration();
        },
        clearInputbox() {
            this.subtitleinput = "";
            this.filecontentsinput = "";
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