<template>
  <div>
    <slider></slider>

    <detailFilm></detailFilm>
  </div>
</template>

<script>
import Slider from "../../components/layout/Slider.vue";
import detailFilm from "@/components/detailMovie/detailFilm.vue";

export default {
  name: "detailMovies",

  layout: "default.vue",

  components: {
    Slider,
    detailFilm,
  },

  computed: {
    movieId() {
      return this.$route.params.id || ""
    }
  }
};
</script>
