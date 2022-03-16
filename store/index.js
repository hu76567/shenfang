import Vue from "vue";
import Vuex from "vuex";
import { getToken, setToken, removeToken } from "../utils/token";
import { getUser, setUser, removeUser } from "../utils/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getToken(),
    user: getUser(),
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
      setToken(payload);
    },
    delToken(state) {
      state.token = [];
      removeToken();
    },
    saveUser(state, payload) {
      state.user = payload;
      setUser(payload);
    },
    delUser(state) {
      state.user = {};
      removeUser();
    },
  },
  actions: {},
});
