<template>
  <div class="movie-slide">
    <div class="row top-movies">
      <div class="col-lg-6">
        <Title :title="titleContentTop"></Title>
      </div>

      <div class="col-lg-6 btn-slick">
        <div>
          <button @click="Prev" type="button">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
          <button @click="showNext" type="button">
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
    <VueSlickCarousel v-bind="settings" ref="carousel">
        <MovieCard
          v-for="(item, index) in list"
          :key="index"
          :item="item"
        ></MovieCard>
    </VueSlickCarousel>
  </div>
</template>

<script>
import Title from "@/components/layout/Title.vue";

// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import MovieCard from "@/components/movies/Card";
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "MoviesSlide",

  components: {
    MovieCard,
    VueSlickCarousel,
    Title,
  },

  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      titleContentTop:{
        name: "Top Movies :",
        year : "2019",
      },
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        //  autoplay: true,
        autoplaySpeed: 2000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        arrows: false,
      },
    };
  },

  methods: {
    Prev() {
      this.$refs.carousel.prev();
    },
    showNext() {
      this.$refs.carousel.next();
    },
  },
};
</script>
