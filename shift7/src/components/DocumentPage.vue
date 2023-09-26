<template>
  <div class="main">
    <v-card
      class="overflow-y-auto"
      style="margin: 30px 30px; height: 83vh; width: 69vw; background: #111"
    >
      <v-banner
        class="justify-left text-h5 font-weight-light"
        sticky
        style="background: #111; color: white"
      >
        <h1>File Title</h1>
      </v-banner>
      <v-subtitle style="margin: 16px; color: #ffffff94"
        >1. What is Lorem Ipsum?</v-subtitle
      >

      <v-card-text>
        <div class="mb-4" style="color: #767676">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like).
        </div>
      </v-card-text>
      <v-subtitle style="margin: 16px; color: #ffffff94"
        >2. Where does it come from?</v-subtitle
      >
      <v-card-text>
        <div class="mb-4" style="color: #767676">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham. Where can I get
          some? There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </div>
      </v-card-text>

      <v-subtitle style="margin: 16px; color: #ffffff94"
        >3. What is overflow in programming?</v-subtitle
      >

      <v-card-text>
        <div class="mb-4" style="color: #767676">
          In general, a data type overflow error is when the data type used to
          store data was not large enough to hold the data. Furthermore, some
          data types can only store numbers up to a certain size. An overflow
          error will be produced, for example, if a data type is a single byte
          and the data to be stored is greater than 256.
        </div>
      </v-card-text>

      <v-subtitle style="margin: 16px; color: #ffffff94">4. Examples</v-subtitle>

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
    </v-card>

    <v-spacer></v-spacer>
    <PageRightSideNav />
  </div>
</template>

<script setup>
import PageRightSideNav from "@/layouts/default/PageRightSideNav.vue";
</script>


<script>
export default {
  components: [PageRightSideNav],
};
</script>

<style scoped>
::-webkit-scrollbar-track {
  background: #111;
}
::-webkit-scrollbar-thumb {
  background: #767676;
  border-radius: 10px;
}
::-webkit-scrollbar {
  width: 4px;
}
</style>