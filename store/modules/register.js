import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const login = {
  namespaced: true,
  state: {
    token: "",
    email: "",
    name: "",
    isAuth: false,
    citizenId: "",
  },
  mutations: {
    setToken(state, accessToken) {
      state.token = accessToken;
    },
    setId(state, id) {
      state.citizenId = id;
    },
    setId(state, name, family) {
      state.name = name + "" + family;
    },
  },
  actions: {
    // login user
    async loginUser({ commit }, { mobile, password }) {
      console.log(this.$axios.defaults.baseURL);
      try {
        const response = await axios.post(
          `${this.$axios.defaults.baseURL}/citizens/check`, //usage of base url
          {
            mobile: mobile,
            password: password,
          }
        );

        Swal.fire({
          title: `خوش آمدید`,
          icon: "success",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
          toast: true,
          position: "top",
        });
        commit("setToken", response.data.message);
        commit("setId", response.data.data.id);
        commit("setName", response.data.data.name, response.data.data.family);

        Cookies.set("Token", response.data.message,{ secure: true });
        Cookies.set("citizenId", response.data.data.id);
        Cookies.set("name", response.data.data.name);
        Cookies.set("family", response.data.data.family);
        this.$router.push({ path: "dashboard" });
      } catch (error) {
        Swal.fire({
          text: "شماره تلفن یا رمز عبور شما اشتباه می باشد .",
          icon: "error",
          confirmButtonText: "باشه",
        });
      }
    },
    // create user
    async registerUser(
      { commit },
      { email, password, name, family, mobile, password_confirmation }
    ) {
      try {
        const response = await axios.post(
          `${this.$axios.defaults.baseURL}/citizens/register`,
          {
            email: email,
            password: password,
            password_confirmation: password_confirmation,
            name: name,
            mobile: mobile,
            family: family,
          }
        );
        Swal.fire({
          title: `اکانت شما با موفقیت ساخنه شد.`,
          icon: "success",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
          toast: true,
          position: "top",
        });
        this.$router.push({ path: "dashboard" });
        console.log(response.data.message);

        commit("setToken", response.data.message);
        Cookies.set("Token", response.data.message);
      } catch (error) {
        Swal.fire({
          text: "اکانت شما موجود می باشد لطفا از ایمیل یا شماره تلفن دیگر استفاده کنید.",
          icon: "error",
          confirmButtonText: "بستن",
        });
      }
    },
  },
  // getters: {
  //     loadedToken(state) {
  //         return state.token
  //     },

  // }
};
export default login;
