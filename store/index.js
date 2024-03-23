import Vuex from "vuex";

import material from "./modules/material";
import tutorial from "./modules/tutorial";

const createStore = () => {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
      material,tutorial,
    },
  });
};
export default createStore;
