<template>
    <div>
        <nav class="navbar-container">
            <div class="open-btn" @click="openMenu">
                <!-- Your toggle button icon here -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>
            <div class="navbar-nav-container">
                <div class="">
                    <img width="100" src="../../../assets/img/logos/logo.png" alt="">
                </div>
            </div>
            <div>
                <Avatar :userName=fullName />
            </div>

        </nav>
    </div>
</template>

<script>
import Avatar from '@/components/elements/avatar/index.vue'
import Cookies from "js-cookie";

export default {
    name: 'Navbar',
    components: {
        Avatar
    },
    data() {
        return {

        };
    },
    computed: {
        fullName() {
            return Cookies.get("name") + ' ' + Cookies.get("family");
        }
    },
    methods: {
        openMenu() {
            this.$emit('toggle-sidebar'); // Emit an event to toggle sidebar in parent component
        },

        goMain() {
            this.$router.push('/dashboard');
        },
        goProfile() {
            this.$router.push('/dashboard/profile');
        },
        goHistoryOrder() {
            this.$router.push('/dashboard/order');
        },
        goOrder() {
            this.$router.push('/dashboard/order/create');
        },
        goPrice() {
            this.$router.push('/dashboard/priceMaterial');
        },
        goAdvertising() {
            this.$router.push('/dashboard/advertising');
        },
        goLearning() {
            this.$router.push('/dashboard/learning');
        },
        goStation() {
            this.$router.push('/dashboard/stations');
        },
        goComment() {
            this.$router.push('/dashboard/comment');
        },
        logOut() {
            localStorage.removeItem('adminToken');
            this.$router.push('/login_admin');
        },
        toggleSidebar() {
            this.$emit('toggle-sidebar');
        },
    },
};
</script>

<style scoped></style>