import axios from "axios";
import Swal from "sweetalert2";

const coin = {
  namespaced: true,
  state: {
    materials: [],
  },
  getters: {
    loadedMaterials(state) {
      return state.materials;
    },
  },
  mutations: {
    setMaterials(state, myMaterials) {
      state.materials = myMaterials; // Note the corrected capitalization of 'state.materials'
    },
  },
  actions: {
    async getMaterials({ commit }) {
      try {

        const response = await axios.get(
            `${this.$axios.defaults.baseURL}/matrials`,
          {} // Pass the headers as an option
        );
        console.log((response.data.data.matrials));
        commit("setMaterials", response.data.data.matrials); // Use response.data.data to get the actual coin data
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
