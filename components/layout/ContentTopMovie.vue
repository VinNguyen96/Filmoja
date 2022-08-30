<template>
  <div class="container top">
    <div class="row top-movies">
      <div class="col-lg-6">
        <Title :title="titleContentTop"></Title>
      </div>

      <!-- <div class="col-lg-6 btn-slick">
        <div>
          <button @click="Prev" type="button">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
          <button @click="showNext" type="button">
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div> -->
    </div>

    <MoviesSlide :list="topArray"></MoviesSlide>
  </div>
</template>

<script>

import Title from "@/components/layout/Title.vue";
import MoviesSlide from "@/components/movies/MoviesSlide";

export default {
  name: "topMovie",
  components: {
    Title,
    MoviesSlide,
  },


  data() {
    return {
      titleContentTop: "Top Movies",
      topArray: [
        {
          img: require("../../assets/images/top-slider-1.jpeg"),
          name: "Draeing Joker",
          like: "256",
          watch: "45",
          evaluate: "4.5",
        },

        {
          img: require("../../assets/images/top-slider-2.jpeg"),
          name: "Draeing Joker",
          like: "256",
          watch: "45",
          evaluate: "4.5",
        },

        {
          img: require("../../assets/images/top-slider-3.jpeg"),
          name: "Draeing Joker",
          like: "256",
          watch: "45",
          evaluate: "4.5",
        },

        {
          img: require("../../assets/images/top-slider-4.jpg"),
          name: "Draeing Joker",
          like: "256",
          watch: "45",
          evaluate: "4.5",
        },

        {
          img: require("../../assets/images/top-slider-5.jpeg"),
          name: "Draeing Joker",
          like: "256",
          watch: "45",
          evaluate: "4.5",
        },

        {
          img: require("../../assets/images/top-slider-1.jpeg"),
          name: "Draeing Joker",
          like: "256",
          watch: "45",
          evaluate: "4.5",
        },
      ],
    };
  },
};
</script>
