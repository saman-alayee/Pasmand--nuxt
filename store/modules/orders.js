import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const order = {
  namespaced: true,
  state: {
    order: [],
  },
  getters: {
    loadedOrders(state) {
      return state.order;
    },
  },
  mutations: {
    setOrders(state, myOrders) {
      state.order = myOrders;
    },
  },
  actions: {
    async getOrders({ commit }, page = 1) {
      try {
        const headers = {
            Authorization: `Bearer ${Cookies.get('Token')}`
          };
        const response = await axios.get(
          `${this.$axios.defaults.baseURL}/orders`,
          {
            headers: headers, // Pass the headers as an option
          },
          {
            params: { page } // Pass the pagination parameter
          }
        );
        commit("setOrders", response.data.data.orders); // Use the correct path to access order
        console.log(response.data.data.orders)

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
    async createOrders({ commit }, formData) {
      try {
          const headers = {
              Authorization: `Bearer ${Cookies.get('Token')}`
            };
        const response = await axios.post(
          `${this.$axios.defaults.baseURL}/orders`,  //usage of base url
          formData,
          {
              headers: headers, // Pass the headers as an option
            },
        );
        
        Swal.fire({
          title: `سفارش شما با موفقیت ثبت شد.`,
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

        
      }
    },
  },
};

export default order;
