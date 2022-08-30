<template>
  <div class="movie-slide">
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
  },

  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
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
