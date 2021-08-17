import { createStore } from "vuex";

declare var require: any;

import user from "./modules/user";

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
  },
});

export default store;
