import Vuex from "vuex";

import material from "./modules/material";
import tutorial from "./modules/tutorial";
import register from "./modules/register";

const createStore = () => {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
      material,
      tutorial,
      register,
    },
  });
};
export default createStore;
