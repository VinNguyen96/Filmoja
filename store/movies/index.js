export const state = () => ({
});

export const getters = {};

export const mutations = {};

export const actions = {
  async getListMovie(context) {
    try {
      const result = await this.$axios.$get(
        "https://netflix-weekly-top-10.p.rapidapi.com/api/othermovie"
      );
      return result || [];
    } catch (error) {
      console.log(error);
    }
  },
};
