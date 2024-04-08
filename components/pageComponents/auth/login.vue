<template>
  <b-container fluid class="p-4 pt-5 mt-4">
    <b-row class="justify-content-center">
      <b-col class="mt-5" lg="8" md="10" sm="12">
        <b-card no-body class=" auth-card">
          <!-- Content of the card -->
          <b-row>
            <b-col md="5" sm="12">
              <div class="image-side d-flex flex-column justify-content-center align-items-center text-right">
                <p class="text-white h6 mb-2 p-3">
                  برای ورود به سیستم نام کاربری و رمز خود را وارد کنید
                  <br />اگه حساب کاربری نداری نگران نباش، از اینجا میتونی تو سایت اسمتو بنویسی
                  <router-link tag="a" to="/register" class="white">لینک ثبت نام</router-link>.
                </p>
              </div>
            </b-col>
            <b-col md="7" sm="12" class="mt-5 pt-2">
              <div class="logo-image p-5">
                <img src="../../../assets/logos/black.svg" alt="">
              </div>
              <b-card-body class="p-5" title="ورود">
                <div class="empty-alert" v-if="error">
                  {{ error }}
                </div>
                <b-form @submit.prevent="validateForm">
                  <BaseInput label="شماره تلفن" type="text" iconSrc="/icons/telephone.svg" v-model="mobile" />
                  <BaseInput label="رمز عبور" type="password" iconSrc="/icons/password.svg" v-model="password" />

                  <div class="d-flex justify-content-between align-items-center">
                      <router-link tag="a" to="/forgetPassword" class="white">رمز عبورت یادت رفته؟</router-link>.
                    <BaseButton buttonText="ورود"
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
      mobile: '',
      password: '',
      error: ''
    };
  },
  methods: {
    validateForm() {
      // Clear previous errors
      this.error = '';

      // Check if mobile is empty
      if (!this.mobile.trim()) {
        this.error = 'لطفاً شماره تلفن خود را وارد کنید';
        return;
      }
      // Check if password is empty
      if (!this.password.trim()) {
        this.error = 'لطفاً رمز عبور خود را وارد کنید';
        return;
      }
       if (!this.isValidMobile(this.mobile)) {
        this.error = 'شماره موبایل وارد شده معتبر نیست';
        return;
      }

      // Check if password is at least 8 characters long
      if (this.password.length < 8) {
        this.error = 'رمز عبور باید حداقل ۸ کاراکتر باشد';
        return;
      }

      else {
        this.$store.dispatch("register/loginUser", {
          mobile: this.mobile,
          password: this.password,
        });
      }
    },
    isValidMobile(mobile) {
      // Regular expression to validate mobile number
      const mobileRegex = /^09\d{9}$/;
      return mobileRegex.test(mobile);
    }
  }
};
</script>

<style scoped>

</style>
