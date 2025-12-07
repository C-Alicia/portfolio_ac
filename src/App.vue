<template>
  <div>
    <!-- Page de chargement -->
    <Loader v-if="showLoader" @finished="hideLoader" />

    <!-- Contenu principal -->
    <div v-else>
      <Header />
      <main class="container">
        <RouterView />
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Loader from './components/Loader.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const showLoader = ref(true)

const hideLoader = () => {
  showLoader.value = false
  document.body.style.overflow = 'auto'
}

// Empêche scroll pendant tout le loader
document.body.style.overflow = 'hidden'
</script>

<style>
.container {
   margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100%;
}
</style>
