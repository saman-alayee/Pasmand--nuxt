import axios from "axios";
import Swal from "sweetalert2";

const tutorials = {
  namespaced: true,
  state: {
    tutorials: [],
    singleTutorial: [],
  },
  getters: {
    loadedTutorials(state) {
      return state.tutorials;
    },
    loadedSingleTutorial(state) {
      return state.singleTutorial;
    },
  },
  mutations: {
    setTutorials(state, myTutorials) {
      state.tutorials = myTutorials;
    },
    setSingleTutorial(state, mySingleTutorial) {
      state.singleTutorial = mySingleTutorial;
    },
  },
  actions: {
    async getTutorials({ commit }, page = 1) {
      try {
        const response = await axios.get(
          `${this.$axios.defaults.baseURL}/tutorials`,
          {
            params: { page }, // Pass the pagination parameter
          }
        );
        commit("setTutorials", response.data.data.Tutorials); // Use the correct path to access tutorials
        console.log(response.data.data.Tutorials);
      } catch (error) {
        Swal.fire({
          title: "ارور :( ",
          text: "مشکلی پیش آمده است لطفا دوباره امتحان کنید.",
          icon: "error",
          confirmButtonText: "باشه",
        });
      }
    },
    async singleTutorials({ commit }, id) {
      try {
        const response = await axios.get(
          `${this.$axios.defaults.baseURL}/tutorials/${id}`,
          
        );
        commit("setSingleTutorial", response.data.data); // Use the correct path to access tutorials
        console.log(response.data.data);
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
