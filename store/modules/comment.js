import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const coin = {
  namespaced: true,
  state: {
    comments: [],
  },
  getters: {
    loadedComments(state) {
      return state.comments;
    },
  },
  mutations: {
    setComments(state, myComments) {
      state.comments = myComments; // Note the corrected capitalization of 'state.comments'
    },
  },
  actions: {
      async createComment({ commit }, { title, text,score }) {
        console.log(this.$axios.defaults.baseURL)
        try {
            const headers = {
                Authorization: `Bearer ${Cookies.get('Token')}`
              };
          const response = await axios.post(
            `${this.$axios.defaults.baseURL}/comments`,  //usage of base url
            {
                title: title,
                text: text,
                score: score,
                citizens_id: Cookies.get("citizenId"),
            },
            {
                headers: headers, // Pass the headers as an option
              },
          );
          
          Swal.fire({
            title: `نظر شما با موفقیت ثبت شد.`,
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: "top",
          });
       
  
        } 
        catch (error) {
          Swal.fire({
            title: "ارور :( ",
            text: "مشکلی پیش آمده است لطفا دوباره امتحان کنید.",
            icon: "error",
            confirmButtonText: "باشه",
          });
          console.log(error);

          
        }
      },
    // get all comments
    async getComments({ commit }) {
      try {
        const headers = {
            Authorization: `Bearer ${Cookies.get('Token')}`
          };
        const response = await axios.get(
            `${this.$axios.defaults.baseURL}/comments`,
            {
                headers: headers, // Pass the headers as an option
              }
        );
        console.log((response.data.data.comments));
        commit("setComments", response.data.data.comments); // Use response.data.data to get the actual coin data
      } catch (error) {
        Swal.fire({
          title: "ارور :( ",
          text: "مشکلی پیش آمده است لطفا دوباره امتحان کنید.",
          icon: "error",
          confirmButtonText: "باشه",
        });
        console.log(error);
      }
    },
  },
};

export default coin;
