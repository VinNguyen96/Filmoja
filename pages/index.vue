<template>
  <div>
    <!-- <Header></Header> -->

    <button @click="abc">counter {{ getCounter }}</button>

    <Slider></Slider>

    <topMovie></topMovie>

    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/yTj9Owe40do"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <ContentWatch></ContentWatch>

    <ListMovieItem :list="listMovie"></ListMovieItem>

    <Subscribe></Subscribe>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import { defaultMutations } from "@/constant/store";
import GlobalData from "@/mixins/GlobalData";

import Slider from "@/components/layout/Slider.vue";
import topMovie from "@/components/layout/ContentTopMovie.vue";
import ContentWatch from "@/components/layout/ContentWatch.vue";
import Subscribe from "@/components/layout/content/Subscribe.vue";
import ListMovieItem from "@/components/movies/ListMovies.vue";

export default {
  name: "IndexPage",

  layout: "default",
  mixins: [GlobalData],

  components: {
    Slider,
    topMovie,
    ContentWatch,
    Subscribe,
    ListMovieItem,
  },

  data() {
    return {
      listMovie: [],
      isCase1: false,
    };
  },

  computed: {
    ...mapGetters({ getCounter: "getCounter", janwdkjanw: "user/getUser" }),
  },

  async mounted() {
    await this.initData();
  },

  methods: {
    ...mapMutations({
      increment: defaultMutations.INCREMENT,
    }),

    ...mapActions({
      fetchCounter: "fetchCounter",
      getListMovie: "movies/getListMovie",
    }),

    abc() {
      this.$store.commit(defaultMutations.INCREMENT);
    },

    async initData() {
      await this.getListMovieFromStore();
    },

    async getListMovieFromStore() {
      const movies = await this.getListMovie();

      const result = movies.map((item) => {
        return {
          lists: item.list,
          title: item.name,
          hours: item.hoursviewed,
        };
      });

      console.log(result);

      this.listMovie = movies;
    },
  },
};
</script>
