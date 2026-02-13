<template>
  <div id="app">
    <!-- Page de chargement -->
    <Loader v-if="showLoader" @finished="hideLoader" />

    <!-- Contenu principal -->
    <div v-else class="app-content">
      <Header />

      <main class="flex-grow">
        <RouterView v-slot="{ Component, route }">
          <transition name="page" mode="out-in">
            <component :is="Component" :key="route.fullPath" />
          </transition>
        </RouterView>
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

const hideLoader = () => {
  showLoader.value = false
  document.body.style.overflow = 'auto'
}

onMounted(() => {
  // Empêche le scroll uniquement pendant le loader
  document.body.style.overflow = 'hidden'
})
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

.app-content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main.flex-grow {
  flex: 1;
}

/* 🎬 Transition pages */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(40px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}
</style>
