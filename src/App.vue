<template>
  <div id="app">
    <!-- Page de chargement -->
    <Loader v-if="showLoader" @finished="hideLoader" />

    <!-- Contenu principal -->
    <div v-else class="app-content">
      <Header />
      <main class="flex-grow">
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
* {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}

/* 2. Contenu principal en flex pour pousser le footer */
.app-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* 3. Main qui pousse le footer */
main.flex-grow {
  flex: 1;
}

/* 4. Container global */
.container {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
}
</style>
