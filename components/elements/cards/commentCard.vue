<template>
    <div>
      <div class="card-container-comment text-right text-dark">
        <div class="card-header bg-success text-white d-flex justify-content-between">
          <h5>{{ title }}</h5>
          <p>{{ date }}</p>
        </div>
        <div class="card-body text-justify">
          <p class="card-text">{{ content }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      date: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any necessary styling here */
  </style>
  