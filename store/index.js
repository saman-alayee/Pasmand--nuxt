import Vuex from "vuex";

import material from "./modules/material";
import tutorial from "./modules/tutorial";
import register from "./modules/register";
import comment from "./modules/comment";
import news from "./modules/news";



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
      comment,
      news
    },
  });
};
export default createStore;
