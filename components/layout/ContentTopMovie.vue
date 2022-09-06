<template>
  <div class="container top">
     <MoviesSlide :list="topArray"></MoviesSlide>
  </div>
</template>

<script>

import MoviesSlide from "@/components/movies/MoviesSlide";

export default {
  name: "topMovie",
  components: {
    
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
