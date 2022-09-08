import { defaultMutations } from "@/constant/store";

export const state = () => ({
  counter: 100,
});

export const getters = {
  getCounter(state) {
    return state.counter;
  },
};

export const mutations = {
  [defaultMutations.INCREMENT](state) {
    state.counter++;
  },
  [defaultMutations.SET_COUNTER](state, value) {
    state.counter = value;
  },
};

export const actions = {
  async fetchCounter({ commit }) {
    // make request
    const res = { data: 10 };
    commit(defaultMutations.SET_COUNTER, res.data);
    return res.data;
  },

  nuxtServerInit({ commit }, { req }) {
    if (req.session.user) {
      commit("user", req.session.user);
    }
  },
};
