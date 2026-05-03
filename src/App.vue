<template>
  <div id="app">
    
    <!-- ✅ Loader affiché AU-DESSUS, sans bloquer l’app -->
    <Loader v-if="showLoader" @finished="hideLoader" />

    <!-- ✅ L'app est TOUJOURS rendue -->
    <div class="app-content">
      <Header />

      <main class="flex-grow">
        <RouterView v-slot="{ Component, route }">
          <transition name="page">
            <!-- 🔥 clé obligatoire -->
            <component :is="Component" :key="route.fullPath" />
          </transition>
        </RouterView>
      </main>

      <Footer />
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
  document.body.style.overflow = 'hidden'

  // 🔥 sécurité : si le loader ne répond pas
  setTimeout(() => {
    showLoader.value = false
    document.body.style.overflow = 'auto'
  }, 3000)
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

/* Transition plus safe */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>