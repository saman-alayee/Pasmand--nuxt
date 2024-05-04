import axios from "axios";
import Swal from "sweetalert2";

const station = {
  namespaced: true,
  state: {
    station: [],
  },
  getters: {
    loadedStations(state) {
      return state.station;
    },
  },
  mutations: {
    setStations(state, myStations) {
      state.station = myStations;
    },
  },
  actions: {
    async getStations({ commit }, page = 1) {
      try {
        const response = await axios.get(
          `${this.$axios.defaults.baseURL}/stations`,
          {
            params: { page } // Pass the pagination parameter
          }
        );
        commit("setStations", response.data.data.stations); // Use the correct path to access station
        console.log(response.data.data.stations)

      } catch (error) {
        console.log(error)
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

export default station;
