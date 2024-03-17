<template>
    <div class="mt-3">
        <p class=" text-center h4">پروفایل من (مشخصات حساب)</p>
        <div class="mt-4 pr-1">
            <p class="text-success text-right h6">تصویر شما</p>
            <div class="separator mb-5"></div>
        </div>
        <div class="d-flex justify-content-center flex-column align-items-center">
            <div class="img-container-profile ">
                <img src="../../../assets/img/login/balloon-lg.jpg" alt="" />
            </div>
            <div>
                <baseInputFile class="mt-2" buttonText="بارگذاری عکس" buttonClass="btn btn-primary btn-login"
                    @file-selected="handleFileSelected" />
            </div>
        </div>
        <div class="mt-4 pr-1">
            <p class="text-success text-right h6"> اطلاعات هویتی </p>
            <div class="separator mb-5"></div>
            <div>
                <div class="empty-alert" v-if="error">{{ error }}</div>
                <b-row class="text-right text-dark h6">
                    <b-col class="mt-3" lg="6" md="6" cols="12" sm="12"> <label for="">نام و نام خانوادگی</label>
                        <BaseInput type="text" iconSrc="/icons/person.svg" v-model="username" />
                    </b-col>
                    <b-col class="mt-3" lg="6" md="6" cols="12" sm="12"> <label for="">ایمیل</label>
                        <BaseInput type="email" iconSrc="/icons/email.svg" v-model="email" />
                    </b-col>
                    <b-col class="mt-3" lg="6" md="6" cols="12" sm="12"> <label for="">شماره موبایل</label>
                        <BaseInput type="tel" iconSrc="/icons/telephone.svg" v-model="mobile" />

                    </b-col>
                    <b-col class="mt-3" lg="6" md="6" cols="12" sm="12"> <label for=""> تاریخ تولد</label>
                        <BaseInput type="date" v-model="birthdate" />
                    </b-col>
                    <b-col class="mt-3" lg="6" md="6" cols="12" sm="12"> <label for=""> رمز عبور</label>
                        <BaseInput type="password" iconSrc="/icons/password.svg" v-model="password" />
                    </b-col>
                    <b-col class="mt-3" lg="6" md="6" cols="12" sm="12"> <label for=""> تکرار رمز عبور</label>
                        <BaseInput type="password" iconSrc="/icons/password.svg" v-model="confirmPassword" />
                    </b-col>
                </b-row>
                <div class="d-flex justify-content-end align-items-center">
                    <BaseButton buttonText="ثبت نام" @click="validateForm"
                        buttonClasses="btn-login btn btn-primary btn-md btn-multiple-state btn-shadow" />
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
</template>
<script>
import BaseButton from '../../elements/button/baseButton.vue'
import BaseInput from '../../elements/forms/baseInput.vue';
import baseInputFile from '../../elements/forms/baseInputFile.vue';

import Footer from '../../elements/footer/footer.vue';

export default {
    components: {
        BaseButton, BaseInput, Footer, baseInputFile
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
    },
}
</script>