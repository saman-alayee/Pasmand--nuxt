import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const login = {
  namespaced: true,
  state: {
    token: "",
    email: "",
    name:"",
    isAuth: false,
  },
  mutations: {
    setToken(state, accessToken) {
      state.token = accessToken;
      state.isAuth = true;
    },
   
  },
  actions: {
    // login user
    async loginUser({ commit }, { mobile, password }) {
        console.log(this.$axios.defaults.baseURL)
        try {
          const response = await axios.post(
            `${this.$axios.defaults.baseURL}/citizens/check`,  //usage of base url
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
          Cookies.set("Token", response.data.message);
          // this.$router.push({ path: "profile" });
  
        } 
        catch (error) {
          Swal.fire({
            title: "Error!",
            text: "There is a problem, please try again",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      },
    // create user
    async registerUser({ commit }, { email, password, name, family, mobile, password_confirmation }) {
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
        // this.$router.push({ path: "dashboard" });
        console.log(response.data.message)
        
        commit("setToken", response.data.message);
        Cookies.set("Token", response.data.message);
      } catch (error) {
        Swal.fire({
          text: 'اکانت شما موجود می باشد لطفا از ایمیل یا شماره تلفن دیگر استفاده کنید.',
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
