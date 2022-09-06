<template>
  <!-- <div class="container"> -->

    <!-- <div class="content"> -->
      <!-- <div class="container menu-Content">
        <div>NEW RELEASES</div>
        <div>MOVIES</div>
        <div>TV SERIES</div>
        <div>CARTOONS</div>
      </div> -->
      
      <div>
        <ListMovieItem :list="listMovie"></ListMovieItem>
      </div>
  

    <!-- </div> -->
  <!-- </div> -->
</template>

<script>
import ListMovieItem from "@/components/movies/ListMovies.vue";


export default {
  name: "ListMovie",

  components: {
    ListMovieItem,
  },

  data() {
    return {
     

      listMovie: [
        {
          id: 1,
          img: require("../../assets/images/top-slider-1.jpeg"),
          name: "Draeing Joker",
          like: "256",
          watch: "45",
          evaluate: "4.5",
        },

        {
          id: 2,
          img: require("../../assets/images/top-slider-2.jpeg"),
          name: "Draeing Joker",
          like: "256",
          watch: "45",
          evaluate: "4.5",
        },

        {
          id: 3,
          img: require("../../assets/images/top-slider-3.jpeg"),
          name: "Draeing Joker",
          like: "256",
          watch: "45",
          evaluate: "4.5",
        },

        {
          id: 4,
          img: require("../../assets/images/top-slider-4.jpg"),
          name: "Draeing Joker",
          like: "256",
          watch: "45",
          evaluate: "4.5",
        },

        {
          id: 5,
          img: require("../../assets/images/top-slider-5.jpeg"),
          name: "Draeing Joker",
          like: "256",
          watch: "45",
          evaluate: "4.5",
        },

        {
          id: 6,
          img: require("../../assets/images/top-slider-1.jpeg"),
          name: "Draeing Joker",
          like: "256",
          watch: "45",
          evaluate: "4.5",
        },

        {
          id: 7,
          img: require("../../assets/images/top-slider-5.jpeg"),
          name: "Draeing Joker",
          like: "256",
          watch: "45",
          evaluate: "4.5",
        },

        {
          id: 8,
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
