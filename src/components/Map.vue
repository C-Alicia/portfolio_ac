<template>
  <div class="map-container">
    <div ref="mapContainer" class="map"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const mapContainer = ref(null)

onMounted(() => {
    const position = [45.5017, -73.5673];    // Montréal, Québec

  // Création de la carte
  const map = L.map(mapContainer.value).setView(position, 12)

  // Tuiles OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)

  // Marqueur
  L.marker(position).addTo(map).bindPopup('👩🏼‍💻 Hi !!!').openPopup()

  // Cercle autour du point
  L.circle(position, {
    color: '#1E90FF',
    fillColor: '#1E90FF',
    fillOpacity: 0.25,
    radius: 3000
  }).addTo(map)
})
</script>

<style scoped>
.map-container {
  width: 100%;
  max-width: 400px;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.map {
  width: 100%;
  height: 100%;
}
</style>
