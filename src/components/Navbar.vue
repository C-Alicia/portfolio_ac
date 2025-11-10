<template>
  <nav class="navbar" :class="{ open: menuOpen }">
    <RouterLink to="/propos" class="nav-link" @click="closeMenu">À propos</RouterLink>
    <RouterLink to="/parcours" class="nav-link" @click="closeMenu">Mon parcours</RouterLink>
    <RouterLink to="/projets" class="nav-link" @click="closeMenu">Projets / Réalisations</RouterLink>
    <RouterLink to="/blog" class="nav-link" @click="closeMenu">Blog</RouterLink>
    <RouterLink to="/contact" class="nav-link" @click="closeMenu">Contact</RouterLink>
    <Toogle />
  </nav>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import Toogle from './Toggle.vue'

// Événements pour communiquer avec le parent (Header.vue)
const emit = defineEmits(['close'])

const menuOpen = ref(false)

const openMenu = () => {
  menuOpen.value = true
}

const closeMenu = () => {
  menuOpen.value = false
  emit('close') // notifier le header si besoin
}

// Permet au parent de contrôler l’ouverture
defineExpose({ openMenu, closeMenu, menuOpen })
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .navbar {
    position: absolute;
    top: 70px;
    left: 0;
    background-color: inherit;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2rem 0;
    gap: 1rem;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
  }

  .navbar.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }
}

.nav-link {
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: #284b63;
}

.header.dark .nav-link:hover {
  color: #F9BC60;
}
</style>
