<!-- src/components/Loader.vue -->
<template>
  <div class="loader-container">
    <img src="/src/assets/img/Avatar__lili.png" alt="Logo" class="loader-logo" />
  </div>
</template>

<script setup>
// Aucun script ici, tout est géré dans App.vue
</script>

<style scoped>
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0d1117; /* ou var(--loader-bg) si tu veux */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeOut 1s ease forwards;
  animation-delay: 2.4s; /* disparaît après 2,4s */
}

.loader-logo {
  width: 300px;
  height: auto;
  animation: pulse 2s infinite ease-in-out;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.4));
}

/* Animation lumineuse douce */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
    filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.7));
  }
}

/* Disparition fluide du loader */
@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; visibility: hidden; }
}
</style>
