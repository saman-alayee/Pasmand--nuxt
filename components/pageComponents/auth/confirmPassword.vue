<template>
    <b-container fluid class="p-4 pt-5 mt-4">
      <b-row class="justify-content-center">
        <b-col class="mt-5" lg="8" md="10" sm="12">
          <b-card no-body class="auth-card">
            <b-row>
              <b-col md="5" sm="12">
                <div class="image-side d-flex flex-column justify-content-center align-items-center text-right">
                  <p class="text-white h6 mb-2 p-3">
                    رمز یک بار مصرف خود را وارد کنید و رمز عبور خود را عوض کنید
                    <br />اگه حساب کاربری نداری نگران نباش، از اینجا میتونی تو سایت اسمتو بنویسی
                    <router-link tag="a" to="/register" class="white">لینک ثبت نام</router-link>.
                  </p>
                </div>
              </b-col>
              <b-col md="7" sm="12" class="mt-5 pt-2">
                <div class="logo-image ">
                  <img width="200" src="../../../assets/img/logos/logo.png" alt="logo">
                </div>
                <b-card-body class="p-5" title="کد یک بار مصرف">
                  <div class="empty-alert" v-if="error">{{ error }}</div>
                  <b-form @submit.prevent="validateForm">
                    <BaseInput label="رمز یک بار مصرف" type="text" iconSrc="/icons/key.svg" v-model="oneTimePassword" />
                    <div class="d-flex justify-content-end align-items-center">
                      <BaseButton buttonText="تأیید رمز عبور"
                        buttonClasses="btn-login btn btn-success btn-md btn-multiple-state btn-shadow" />
                    </div>
                  </b-form>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  import BaseInput from '../../elements/forms/baseInput.vue'
  import BaseButton from '../../elements/button/baseButton.vue'
  
  export default {
    components: {
      BaseInput,
      BaseButton
    },
    data() {
      return {
        oneTimePassword: '',
        error: ''
      };
    },
    methods: {
      validateForm() {
        // Clear previous errors
        this.error = '';
  
        // Check if one-time password is empty
        if (!this.oneTimePassword.trim()) {
          this.error = 'لطفاً رمز یک بار مصرف را وارد کنید';
          return;
        }
        if (this.oneTimePassword.length !== 4) {
        this.error = 'رمز باید 6 کاراکتر باشد';
        return;
      }
      this.$store.dispatch("register/confirmCode", {
          code: this.oneTimePassword,
        });
  
        // If everything is valid, proceed with the desired action
        // For example, you can make an API call to confirm the password
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add scoped styles if needed */
  </style>
  