<template>
    <div v-if="userName" class="profile d-flex">
      <b-dropdown toggle-class="custom-dropdown" no-caret variant="none" class="custom-dropdown" :text="userName">
        <b-dropdown-item v-for="(item, index) in items" :key="index" @click="redirect(item.route)">
          {{ item.title }}
        </b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item @click="logout">خروج از حساب کاربری</b-dropdown-item>
      </b-dropdown>
      <b-avatar src="../../../assets/img/login/balloon-lg.jpg" width="36px" class="avatar">
      </b-avatar>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserProfile',
    props: {
      userName: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        items: [
          { title: 'ویرایش پروفایل', route: '/dashboard/profile' },
          { title: 'لیست سفارشات', route: '/dashboard/order' },
          { title: 'ثبت نظر', route: '/dashboard/comment' },
          { title: ' آموزش ها', route: '/dashboard/learning' },
          { title: 'لیست آگهی ها ', route: '/dashboard/advertising' },
          { title: 'ایستگاه های جمع آوری', route: '/dashboard/stations' }
        ]
      };
    },
    methods: {
      redirect(route) {
        this.$router.push({ path: route });
      },
      logout() {
        // Implement your logout logic here
      }
    }
  };
  </script>
  
  <style scoped>

  </style>
  