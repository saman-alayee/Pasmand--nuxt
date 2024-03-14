<template>
    <div class="custom-card card-container">
      <div class="card-image-container mt-4">
        <!-- Render SVG icon passed as prop -->
        <div class="svg" v-html="icon"></div>
      </div>
      <div class="card-body-container">
        <p class="title-text">{{ title }}</p>
        <p class="count-text mt-3">{{ count }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      icon: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      count: {
        type: Number,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  