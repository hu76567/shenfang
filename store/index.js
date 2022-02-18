import Vue from "vue";
import Vuex from "vuex";
import { getToken, setToken, removeToken} from "../utils/token";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    identity_token: getToken(),
  },
  mutations: {
    setToken(state, payload) {
      state.identity_token = payload;
      setToken(payload);
    },
    delToken(state) {
      state.token = [];
      removeToken();
    },
  },
  actions: {},
});
