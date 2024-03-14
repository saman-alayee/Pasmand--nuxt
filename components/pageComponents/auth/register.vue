<template>
  <b-container fluid class="">
    <b-row class="justify-content-center">
      <b-col class="" lg="8" md="10" sm="12">
        <b-card no-body class="auth-card">
          <b-row>
            <b-col md="5" sm="12">
              <div class="image-side d-flex flex-column justify-content-center align-items-center text-right">
                <p class="text-white h6 mb-2 p-3">
                  اطلاعاتت رو وارد کن و به همین سرعت ثبت نام کن
                  <br />اگه هم تو سایت حساب کاربری داری از اینجا وارد شو
                  <router-link tag="a" to="/login" class="white">لینک ورود </router-link>.
                </p>
              </div>
            </b-col>
            <b-col md="7" sm="12" class="mt-1">
              <div class="logo-image p-5">
                <img src="../../../assets/logos/black.svg" alt="">
              </div>
              <b-card-body class="p-5" title="ثبت نام">
                <div class="empty-alert" v-if="error">{{ error }}</div>
                <b-form @submit.prevent="validateForm">
                  <BaseInput label="نام و نام خانوادگی" type="text" iconSrc="/icons/person.svg" v-model="username" />
                  <BaseInput label="ایمیل" type="email" iconSrc="/icons/email.svg" v-model="email" />
                  <BaseInput label="موبایل" type="tel" iconSrc="/icons/telephone.svg" v-model="mobile" />
                  <BaseInput label="تاریخ تولد" type="date" v-model="birthdate" />
                  <BaseInput label="رمز عبور" type="password" iconSrc="/icons/password.svg" v-model="password" />
                  <BaseInput label="تکرار رمز عبور" type="password" iconSrc="/icons/password.svg" v-model="confirmPassword" />
                  <div class="d-flex justify-content-end align-items-center">
                    <BaseButton buttonText="ثبت نام"
                      buttonClasses="btn-login btn btn-primary btn-md btn-multiple-state btn-shadow" />
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
      username: '',
      email: '',
      mobile: '',
      birthdate: '',
      password: '',
      confirmPassword: '',
      error: ''
    };
  },
  methods: {
    validateForm() {
      this.error = '';

      if (!this.username.trim()) {
        this.error = 'لطفاً نام خود را وارد کنید';
      } else if (!this.email.trim()) {
        this.error = 'لطفاً ایمیل خود را وارد کنید';
      } else if (!this.isValidEmail(this.email)) {
        this.error = 'ایمیل وارد شده معتبر نیست';
      } else if (!this.mobile.trim()) {
        this.error = 'لطفاً شماره موبایل خود را وارد کنید';
      } else if (!this.isValidMobile(this.mobile)) {
        this.error = 'شماره موبایل وارد شده معتبر نیست';
      } else if (!this.birthdate) {
        this.error = 'لطفاً تاریخ تولد خود را وارد کنید';
      } else if (!this.password.trim()) {
        this.error = 'لطفاً رمز عبور خود را وارد کنید';
      } else if (this.password.length < 8) {
        this.error = 'رمز عبور باید حداقل ۸ کاراکتر باشد';
      } else if (this.password !== this.confirmPassword) {
        this.error = 'رمز عبور و تکرار آن مطابقت ندارند';
      } else {
        // Proceed with form submission
      }
    },
    isValidEmail(email) {
      // Regular expression to validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
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
/* Add scoped styles if needed */
</style>
