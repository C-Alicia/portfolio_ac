<template>
  <div>
    <!-- Page de chargement -->
    <Loader v-if="showLoader" />

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
import { ref, onMounted } from 'vue'
import Loader from './components/Loader.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const showLoader = ref(true)

onMounted(() => {
  // Empêche le scroll pendant le chargement
  document.body.style.overflow = 'hidden'

  // Simule le chargement (2.5 secondes)
  setTimeout(() => {
    showLoader.value = false
    document.body.style.overflow = 'auto'
  }, 2500)
})
</script>

<style>
.container {
  padding-top: 2rem;
  max-width: calc(100vw - 4rem);
}
</style>
