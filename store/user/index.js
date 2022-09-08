
export const state = () => ({
  userInfo: {
    id: 234,
    name: 'Nguyen',
    birthday: '12/4/2033'
  }
});

export const getters = {
  getUser(state) {
    return state.userInfo;
  },
};

export const mutations = {

};

export const actions = {
  
};
