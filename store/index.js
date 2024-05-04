import Vuex from "vuex";

import material from "./modules/material";
import tutorial from "./modules/tutorial";
import register from "./modules/register";
import comment from "./modules/comment";
import news from "./modules/news";
import orders from "./modules/orders";
import station from "./modules/stations";



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
      news,
      orders,
      station
    },
  });
};
export default createStore;
