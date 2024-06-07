<template>
    <div class="mt-3">
        <p class="text-center h4">پروفایل من (مشخصات حساب)</p>
        <div class="mt-4 pr-1">
            <p class="text-success text-right h6">اطلاعات هویتی</p>
            <div class="separator mb-5"></div>
            <div>
                <div class="empty-alert text-justify" v-if="errors.length > 0">
                    <ul>
                        <li v-for="error in errors" :key="error">{{ error }}</li>
                    </ul>
                </div>

                <b-row class="text-right text-dark h6">
                    <b-col class="mt-3" lg="6" md="6" cols="12" sm="12">
                        <label for="name">نام</label>
                        <BaseInput type="text" iconSrc="/icons/person.svg" v-model="name" />
                    </b-col>
                    <b-col class="mt-3" lg="6" md="6" cols="12" sm="12">
                        <label for="lastname">نام خانوادگی</label>
                        <BaseInput type="text" iconSrc="/icons/person.svg" v-model="lastname" />
                    </b-col>
                    <b-col class="mt-3" lg="6" md="6" cols="12" sm="12">
                        <label for="fatherName">نام پدر</label>
                        <BaseInput type="text" iconSrc="/icons/file-person-fill.svg" v-model="fatherName" />
                    </b-col>
                    <b-col class="mt-3" lg="6" md="6" cols="12" sm="12">
                        <label for="serialNumber">شماره شناسنامه</label>
                        <BaseInput type="text" iconSrc="/icons/passport.svg" v-model="serialNumber" />
                    </b-col>
                    <b-col class="mt-3" lg="6" md="6" cols="12" sm="12">
                        <label for="date">تاریخ</label>
                        <date-picker v-model="date" format="YYYY-MM-DD" display-format="jYYYY-jMM-jDD" color="#038503" />
                    </b-col>
                    <b-col class="mt-3" lg="6" md="6" cols="12" sm="12">
                        <label for="email">ایمیل</label>
                        <BaseInput type="email" iconSrc="/icons/email.svg" v-model="email" />
                    </b-col>
                    <b-col class="mt-3" lg="6" md="6" cols="12" sm="12">
                        <label for="phone">شماره موبایل</label>
                        <BaseInput type="tel" iconSrc="/icons/telephone.svg" v-model="mobile" />
                    </b-col>
                    <b-col class="mt-3" lg="6" md="6" cols="12" sm="12">
                        <label for="post">کد پستی</label>
                        <BaseInput type="text" iconSrc="/icons/mailbox-flag.svg" v-model="post" />
                    </b-col>
                    <b-col class="mt-3" lg="6" md="6" cols="12" sm="12">
                        <label for="address">آدرس</label>
                        <BaseInput type="text" iconSrc="/icons/map.svg" v-model="address" />
                    </b-col>
                    <b-col class="mt-3" lg="6" md="6" cols="12" sm="12">
                        <label for="password">رمز عبور</label>
                        <BaseInput type="password" iconSrc="/icons/password.svg" v-model="password" />
                    </b-col>
                    <b-col class="mt-3" lg="6" md="6" cols="12" sm="12">
                        <label for="confirmPassword">تکرار رمز عبور</label>
                        <BaseInput type="password" iconSrc="/icons/password.svg" v-model="confirmPassword" />
                    </b-col>
                </b-row>
                <div class="d-flex justify-content-end align-items-center">
                    <BaseButton buttonText="ثبت نام" @click="validateForm"
                        buttonClasses="btn-login btn btn-success btn-md btn-multiple-state btn-shadow" />
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
</template>

<script>
import BaseButton from '../../elements/button/baseButton.vue';
import BaseInput from '../../elements/forms/baseInput.vue';
import baseInputFile from '../../elements/forms/baseInputFile.vue';
import Footer from '../../elements/footer/footer.vue';

export default {
    components: {
        BaseButton, BaseInput, Footer, baseInputFile
    },
    data() {
        return {
            name: '',
            lastname: '',
            fatherName: '',
            serialNumber: '',
            date: '',
            email: '',
            mobile: '',
            post: '',
            address: '',
            password: '',
            confirmPassword: '',
            errors: []
        };
    },
    methods: {
        validateForm() {
            this.errors = [];

            if (!this.name.trim()) {
                this.errors.push('لطفاً نام خود را وارد کنید');
            }
            if (!this.lastname.trim()) {
                this.errors.push('لطفاً نام خانوادگی خود را وارد کنید');
            }
            if (!this.fatherName.trim()) {
                this.errors.push('لطفاً نام پدر خود را وارد کنید');
            }
            if (!this.serialNumber.trim()) {
                this.errors.push('لطفاً شماره شناسنامه خود را وارد کنید');
            }
            if (!this.date) {
                this.errors.push('لطفاً تاریخ را وارد کنید');
            }
            if (!this.email.trim()) {
                this.errors.push('لطفاً ایمیل خود را وارد کنید');
            } else if (!this.isValidEmail(this.email)) {
                this.errors.push('ایمیل وارد شده معتبر نیست');
            }
            if (!this.mobile.trim()) {
                this.errors.push('لطفاً شماره موبایل خود را وارد کنید');
            } else if (!this.isValidMobile(this.mobile)) {
                this.errors.push('شماره موبایل وارد شده معتبر نیست');
            }
            if (!this.post.trim()) {
                this.errors.push('لطفاً کد پستی خود را وارد کنید');
            }
            if (!this.address.trim()) {
                this.errors.push('لطفاً آدرس خود را وارد کنید');
            }
            if (!this.password.trim()) {
                this.errors.push('لطفاً رمز عبور خود را وارد کنید');
            } else if (this.password.length < 8) {
                this.errors.push('رمز عبور باید حداقل ۸ کاراکتر باشد');
            }
            if (this.password !== this.confirmPassword) {
                this.errors.push('رمز عبور و تکرار آن مطابقت ندارند');
            }

            if (this.errors.length === 0) {
                // Proceed with form submission
                alert('Form is valid!');
            }
        },
        isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },
        isValidMobile(mobile) {
            const mobileRegex = /^09\d{9}$/;
            return mobileRegex.test(mobile);
        }
    }
}
</script>

<style scoped>
.empty-alert ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}
.empty-alert li {
    color: red;
}
</style>
