import axios from "axios";
import Swal from "sweetalert2";

const coin = {
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
      state.tutorials = myTutorials; // Note the corrected capitalization of 'state.tutorials'
    },
  },
  actions: {
    async getTutorials({ commit }) {
      try {

        const response = await axios.get(
            `${this.$axios.defaults.baseURL}/tutorials`,
          {} // Pass the headers as an option
        );
        console.log((response.data.data.Tutorials));
        commit("setTutorials", response.data.data.Tutorials); // Use response.data.data to get the actual coin data
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "There is a problem, please try again",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    },
  },
};

export default coin;
