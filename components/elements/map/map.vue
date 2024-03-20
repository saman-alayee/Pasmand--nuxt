<template>
    <div>
      <div :style="{ height: mapHeight }"> 
        <l-map :zoom="zoom" :center="center">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="markerLatLng"></l-marker>
        </l-map>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      zoom: {
        type: Number,
        default: 13
      },
      center: {
        type: Array,
        default:''
      },
      url: {
        type: String,
        default: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      },
      attribution: {
        type: String,
        default: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      },
      markerLatLng: {
        type: Array,
        default: ''
      },
      mapHeight: {
        type: String,
        default: '400px' // Default height for the map container
      }
    }
  };
  </script>
  