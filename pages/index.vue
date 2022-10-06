<template>
  <div>
    <!-- <Header></Header> -->

    <button @click="abc">counter {{ getCounter }}</button>

    <Slider></Slider>

    <topMovie></topMovie>

    <ContentWatch></ContentWatch>

    <ListMovie></ListMovie>

    <Subscribe></Subscribe>

   
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import { defaultMutations } from "@/constant/store";

import Slider from "@/components/layout/Slider.vue";
import topMovie from "@/components/layout/ContentTopMovie.vue";
import ContentWatch from "@/components/layout/ContentWatch.vue";
import ListMovie from "@/components/layout/ContentListMovie.vue";
import Subscribe from "@/components/layout/content/Subscribe.vue";

export default {
  name: "IndexPage",

  layout: "default",

  components: {
    Slider,
    topMovie,
    ContentWatch,
    ListMovie,
    Subscribe,
  },


 

  computed: {
    ...mapGetters({ getCounter: "getCounter", janwdkjanw: "user/getUser" }),
  },

  methods: {
    ...mapMutations({
      increment: defaultMutations.INCREMENT,
    }),

    ...mapActions({
      fetchCounter: "fetchCounter",
    }),

    abc() {
      this.$store.commit(defaultMutations.INCREMENT);
    },
  },
};
</script>
