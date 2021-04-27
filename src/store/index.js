import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      loggedIn: false,
      data: null,
      ads: null,
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    ads(state) {
      return state.ads;
    },
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    SET_MY_ADS(state, ads) {
      state.user.ads = ads;
    },
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          phoneNumber: user.phoneNumber,
        });
      } else {
        commit("SET_USER", null);
      }
    },
    myAds({ commit }, ads) {
      commit("SET_MY_ADS", ads !== null);
      if (ads) {
        commit("SET_MY_ADS", {
          ...ads,
        });
      } else {
        commit("SET_MY_ADS", null);
      }
    },
  },
  modules: {},
});
