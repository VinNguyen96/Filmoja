import { mapActions } from "vuex";

const GlobalHandler = (params) => {
  return {
    data() {
      return {
        abc: '12342'
      }
    },

    methods: {
      ...mapActions({
        getListMovie: 'movies/getListMovie'
      }),
    }
  }
}

export default GlobalHandler