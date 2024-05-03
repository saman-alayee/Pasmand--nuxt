import axios from "axios";
import Swal from "sweetalert2";

const tutorials = {
  namespaced: true,
  state: {
    tutorials: [],
  },
  getters: {
    loadedTutorials(state) {
      return state.tutorials;
    },
  },
  mutations: {
    setTutorials(state, myTutorials) {
      state.tutorials = myTutorials;
    },
  },
  actions: {
    async getTutorials({ commit }, page = 1) {
      try {
        const response = await axios.get(
          `${this.$axios.defaults.baseURL}/tutorials`,
          {
            params: { page } // Pass the pagination parameter
          }
        );
        commit("setTutorials", response.data.data.Tutorials); // Use the correct path to access tutorials
        console.log(response.data.data.Tutorials)

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

export default tutorials;
