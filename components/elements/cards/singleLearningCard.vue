<template>
    <div>
      <div class="card learn-card">
        <div class="title-container pb-3 pt-3">
          <h2>{{ title }}</h2>
          <div class="d-flex pt-1">
            <div class="d-flex text-muted pr-4">
              <p class="pl-1">{{ date }}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
            </div>
            <div v-if="author" class="d-flex text-muted pr-4">
              <p class="pl-1">{{ author }}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <img :src="require(`../../../assets${imageSrc}`)"  :alt="imgAlt" class="img-fluid" >
        </div>
        <div class="text--container p-3">
          <p class="text-justify">{{ text }}</p>
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
      imageSrc: {
        type: String,
        default: ""
      },
      imgAlt: {
        type: String,
        default: "Image"
      },
      text: {
        type: String,
        default: ""
      },
      date: {
        type: String,
        default: ""
      },
      author: {
        type: String,
        default: ""
      },
      
    }
  };
  </script>