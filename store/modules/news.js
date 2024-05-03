import axios from "axios";
import Swal from "sweetalert2";

const news = {
  namespaced: true,
  state: {
    news: [],
  },
  getters: {
    loadedAllnews(state) {
      return state.news;
    },
  },
  mutations: {
    setAllnews(state, myAllnews) {
      state.news = myAllnews;
    },
  },
  actions: {
    async getAllnews({ commit }, page = 1) {
      try {
        const response = await axios.get(
          `${this.$axios.defaults.baseURL}/news`,
          {
            params: { page } // Pass the pagination parameter
          }
        );
        commit("setAllnews", response.data.data.brnads); // Use the correct path to access news
        console.log(response.data.data.brnads)

      } catch (error) {
        Swal.fire({
          title: "ارور :( ",
          text: "مشکلی پیش آمده است لطفا دوباره امتحان کنید.",
          icon: "error",
          confirmButtonText: "باشه",
        });
      }
    },
  },
};

export default news;
