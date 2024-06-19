<template>
  <div class="gmap">
    <GoogleMap :api-key="apiKey" style="width: 100%; height: 600px" :center="center" :zoom="16">
      <!-- <Marker :options="{ position: center }" /> -->
    </GoogleMap>
  </div>
</template>

<script setup>
import { GoogleMap } from 'vue3-google-map'

const center = { lat: 42.1148, lng: 3.144766 }

const apiKey = import.meta.env.VITE_VUE_GOOGLE_MAPS_API_KEY
</script>

<style scoped>
.gmap {
  flex: 0 0 auto;
  width: 100%;
  height: 600px;
  max-width: 1160px;
  margin: 2rem auto;
  margin-bottom: 20px;
}
</style>
