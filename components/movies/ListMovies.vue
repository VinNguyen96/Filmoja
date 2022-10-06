<template>
  <div class="container top">
    <Title :title="abc"></Title>
    <div class="content">
      <div class="menu-Content">
        <div>NEW RELEASES</div>
        <div>MOVIES</div>
        <div>TV SERIES</div>
        <div>CARTOONS</div>
      </div>
      <div class="row list-movie">
        <div
          class="col-lg-3"
          v-for="(item, index) in list"
          :key="'listmove' + index"
        >
          <MovieCard :item="item"MovieCard>
          </MovieCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/movies/Card";
import Title from "../../components/layout/Title.vue";

const types = {
  NEW_MOVIES: "new-movies",
  EU_MOVIES: "eu-movies",
  JP_MOVIES: "jp-movies",
};

export default {
  name: "ListMovieItem",

  components: {
    Title,
    MovieCard,
  },

  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      abc: {
        name: "New Items",
        year: "",
      },
    };
  },
};
</script>
