<template>
  <div class="right-side-main">
    <v-card class="right-side-main-nav">
      <v-card-title style="margin: 0px 0px; height: 150px; width: auto; overflow-y: auto">
        <!-- click => DocumentPage -> v-subtitle(타이틀 문장)으로 이동 -->
        <v-btn style="width: 240px" variant="text" >
          1. What is Lorem Ipsum?</v-btn
        >
        <br />
        <v-btn style="width: 240px" variant="text">
          2. Where does it come ...</v-btn
        ><br />
        <v-btn style="width: 240px" variant="text">
          3. What is overflow in ...</v-btn
        >
        <br />
        <v-btn style="width: 240px" variant="text" @click="strSearch">4. Examples</v-btn><br />
        5.<br />
        6.<br />
        7.<br />
      </v-card-title>
    </v-card>
    <!-- commentlist -->
    <div style="height: 330px; width: 100%; overflow-y: auto; overflow-x: hidden;">
      <v-card-subtitle
        class="comment-list"
        v-for="(commentlist, index) in commentlists"
        :key="index"
      >
        <v-card style="width: 100%; height: 130px; margin: 10px 0px">
          <div style="width: 100%; height: 30px">
            <span
              style="
                float: left;
                margin-left: 15px;
                margin-top: 8px;
                font-size: 12px;
              "
              >user.name</span
            >
            <v-btn
              icon
              style="width: 24px; height: 24px; float: right; margin: 2px 5px"
              @click="
                commentlistdots[commentlist] = !commentlistdots[commentlist]
              "
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
            <span style="float: right; margin-top: 5px">{{ timestamp }}</span>
          </div>
          <v-divider style="width: 90%; margin-left: 12px"></v-divider>

          <v-list
            v-if="commentlistdots[commentlist]"
            style="
              position: absolute;
              background: white;
              float: right;
              right: 0;
              border: 0.5px solid #767676;
              border-radius: 10px;
            "
          >
            <div style="padding: 0px 10px">수정</div>
            <v-divider></v-divider>
            <div
              @click="removeComment(commentlist, index)"
              style="padding: 0px 10px"
            >
              삭제
            </div>
          </v-list>
          <div
            style="margin-left: 12px; width: 100%; height: 90px; overflow-y: auto"
          >
            <span style="white-space: pre-line">{{ commentlist }}</span>
          </div>
        </v-card>
      </v-card-subtitle>
    </div>
    <!-- input -->
    <v-card
      style="
        width: 222px;
        height: 70px;
        background-color: #212121;
        color: white;
        position: absolute;
        bottom: 0;
        margin: 60px 30px;
      "
    >
      <div>
        <textarea
          cols="26"
          rows="3"
          style="color: white"
          v-model="commentsinput"
          @keyup.shift.enter="printSubmitEvent"
        ></textarea>
      </div>
    </v-card>
    <v-btn
      type="submit"
      @click="addComment"
      style="
        position: fixed;
        margin: 20px 30px;
        color: white;
        bottom: 0;
        background-color: #212121;
        width: 222px;
      "
      >추가</v-btn
    >
  </div>
</template>
<!-- Set File Page 만들기
File Name 작성후
subtitle과 content 추가
-->
  

  <script>
import GetDate from "@/getDate.js";

export default {
  data() {
    return {
      commentsinput: "",
      commentlists: [],
      commentlistdots: [],
      timestamp: `${GetDate().days}`,
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.commentlists.push(localStorage.getItem(localStorage.key(i)));
        this.commentlistdots.push(false);
      }
      this.commentlists.sort();
    }
  },
  methods: {
    addComment() {
      if (this.commentsinput !== "") {
        var input_value = this.commentsinput && this.commentsinput.trim();
        localStorage.setItem(input_value, input_value);
        this.clearInputbox();
        history.go(0);
      }
    },
    printSubmitEvent() {
      this.addComment();
    },
    clearInputbox() {
      this.commentsinput = "";
    },
    removeComment(commentlist, index) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) == commentlist) {
          localStorage.removeItem(localStorage.key(i));
          break;
        }
      }
      this.commentlists.splice(index, 1);
    },
    // test
    // strSearch() {
    //   const str = '4. Examples';
    //   console.log(str.indexOf('Examples'));
    //   this.$emit(strSearchs, str);
    // },
  },
};
</script>
  
  <style>
.right-side-main {
  height: 100vh;
  width: 276px;
  border-left: 1px solid #767676;
}
.right-side-main-nav {
  background-color: #111;
  color: white;
}
.comment-list {
  color: white;
  width: 90%;
  margin: 0px 14px;
  margin-top: 5px;
}
</style>