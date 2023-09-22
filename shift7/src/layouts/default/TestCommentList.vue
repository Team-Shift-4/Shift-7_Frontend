<!-- v-card-subtitle 추가 순서 & 원하는 로컬스토리지 키값 제거-->
<template>
  <div class="right-side-main">
    <v-card class="right-side-main-nav">
      <v-card-title style="margin: 5px 5px">
        <v-btn style="width: 240px" variant="text">
          1. What is Lorem Ipsum?</v-btn
        >
        <!-- click => DocumentPage -> v-subtitle(타이틀 문장)으로 이동 -->
        <br />
        <v-btn style="width: 240px" variant="text">
          2. Where does it come ...</v-btn
        ><br />
      </v-card-title>
    </v-card>
    <!-- commentlist -->
    <!-- <div style="height: auto; overflow-y: auto"> -->

      <v-card-subtitle
        class="comment-list"
        v-for="commentlist in commentlists"
        :key="commentlist"
      >
        <v-divider style="width: 100%; color: #111"></v-divider>
        <v-card style="width: 100%; height: 130px; margin: 10px 0px">
          <span style="float: left; margin-left:20px; margin-top: 5px;" >user.name</span>
          <v-btn
            icon
            style="width: 24px; height: 24px; float: right; margin: 2px 5px"
            @click="commentlistdots[commentlist] = !commentlistdots[commentlist]"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
          <span style="float: right; margin: 5px 20px">{{timestamp}}</span>
          <v-divider
            style="width: 90%; margin: 0px 12px; margin-top: 30px"
          ></v-divider>

          <v-list
          v-if="commentlistdots[commentlist]"
            style="
              position: relative;
              background: white;
              float: right;
              border: 0.5px solid #767676;
              border-radius: 10px;
            "
          >
            <div style="padding: 0px 10px">수정</div>
            <v-divider></v-divider>
            <div @click="removeComment" style="padding: 0px 10px">삭제</div>
          </v-list>
          <span style="margin: 0px 20px">{{ commentlist }}</span>
        </v-card>
      </v-card-subtitle>
    <!-- </div> -->
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
      <!-- <v-text-field
          label="Comment"
          variant="underlined"
          style="width: 85%; margin: 0px 15px"
          type="text"
          v-model="commentsinput"
          
        ></v-text-field>
        <v-btn type="submit" @click="addComment">추가</v-btn> -->

      <div>
        <input
          style="color: white; width: 100%; height: 70px"
          type="text"
          v-model="commentsinput"
        />
        <!-- 여러줄 입력 & 줄넘김 이벤트 활성화 -->
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
  

  <script>
import GetDate from "@/getDate.js";


export default {
  data() {
    return {
      commentsinput: "",
      commentlists: [],
      commentlistdots: [],
      timestamp : `${GetDate().days}`,
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
          this.commentlists.push(localStorage.getItem(localStorage.key(i)));
          this.commentlistdots.push(false);
      }
    }
  },
  methods: {
    addComment() {
      if (this.commentsinput !== "") {
        var input_value = this.commentsinput && this.commentsinput.trim();
        localStorage.setItem(input_value, input_value);
        this.clearInputbox();
      }
    },
    clearInputbox() {
      this.commentsinput = "";
    },
    removeComment(index) {
      for (let i=0;i<localStorage.length;i++){
          let key = localStorage.key(i);
        localStorage.removeItem(key);
        // if (){
        //   localStorage.removeItem(key);
        //   console.log(321321);
        //   break;
        // }
        console.log(key, i);
        break;
      }
      this.commentlists.splice(index, 1);
    },
    
  },
};
</script>
  
  <style>
.right-side-main {
  height: 100vh;
  width: 300px;
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
  margin-top: 20px;
}
</style>