<template>
  <!-- <div class="container"> -->

  <!-- <div class="content"> -->
  <!-- <div class="container menu-Content">
        <div>NEW RELEASES</div>
        <div>MOVIES</div>
        <div>TV SERIES</div>
        <div>CARTOONS</div>
      </div> -->

  <div class="ccqưeqweqwe">
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


      listMovie: [],
      //   {
      //     img: require("../../assets/images/top-slider-1.jpeg"),
      //     name: "Draeing Joker",
      //     like: "256",
      //     watch: "45",
      //     evaluate: "4.5",
      //   },

      //   {
      //     img: require("../../assets/images/top-slider-2.jpeg"),
      //     name: "Draeing Joker",
      //     like: "256",
      //     watch: "45",
      //     evaluate: "4.5",
      //   },

      //   {
      //     img: require("../../assets/images/top-slider-3.jpeg"),
      //     name: "Draeing Joker",
      //     like: "256",
      //     watch: "45",
      //     evaluate: "4.5",
      //   },

      //   {
      //     img: require("../../assets/images/top-slider-4.jpg"),
      //     name: "Draeing Joker",
      //     like: "256",
      //     watch: "45",
      //     evaluate: "4.5",
      //   },

      //   {
      //     img: require("../../assets/images/top-slider-5.jpeg"),
      //     name: "Draeing Joker",
      //     like: "256",
      //     watch: "45",
      //     evaluate: "4.5",
      //   },

      //   {
      //     img: require("../../assets/images/top-slider-1.jpeg"),
      //     name: "Draeing Joker",
      //     like: "256",
      //     watch: "45",
      //     evaluate: "4.5",
      //   },

      //   {
      //     img: require("../../assets/images/top-slider-5.jpeg"),
      //     name: "Draeing Joker",
      //     like: "256",
      //     watch: "45",
      //     evaluate: "4.5",
      //   },

      //   {
      //     img: require("../../assets/images/top-slider-1.jpeg"),
      //     name: "Draeing Joker",
      //     like: "256",
      //     watch: "45",
      //     evaluate: "4.5",
      //   },


      // ],
    };
  },

  mounted(){
    this.fetchSomething();
  },

  methods: {
    async fetchSomething() {
      const ip = await this.$axios.$get('https://netflix-weekly-top-10.p.rapidapi.com/api/othermovie')
      this.listMovie = ip
    }

    
  }

};



</script>
