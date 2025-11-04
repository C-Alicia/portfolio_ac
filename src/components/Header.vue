<template>
  <header class="header" :class="colorScheme">
    <RouterLink to="/" class="header__logo">
      <img :src="colorScheme === 'dark' ? logoDark : logoLight" alt="Logo du site" class="logo" />
    </RouterLink>

    <!-- Bouton menu burger -->
    <button class="burger" @click="toggleMenu" :class="{ active: menuOpen }" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav class="navbar" :class="{ open: menuOpen }">
      <RouterLink to="/propos" class="nav-link" @click="closeMenu">À propos</RouterLink>
      <RouterLink to="/parcours" class="nav-link" @click="closeMenu">Mon parcours</RouterLink>
      <RouterLink to="/projets" class="nav-link" @click="closeMenu">Projets / Réalisations</RouterLink>
      <RouterLink to="/blog" class="nav-link" @click="closeMenu">Blog</RouterLink>
      <RouterLink to="/contact" class="nav-link" @click="closeMenu">Contact</RouterLink>
      <Toogle />
    </nav>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDark } from '@vueuse/core'
import logoLight from '../assets/img/logo_light.svg'
import logoDark from '../assets/img/logo_dark.svg'
import Toogle from './Toogle.vue'

// Mode sombre
const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
})

const colorScheme = computed(() => (isDark.value ? 'dark' : 'light'))

// État du menu mobile
const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600&display=swap');

.header {
  font-family: 'Work Sans', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  transition: background-color 0.4s ease, color 0.4s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header.light {
  background-color: #ffffff;
  color: #1e1e1e;
}

.header.dark {
  background-color: #1e3a4c;
  color: #f2f2f2;
}

.logo {
  width: 60px;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: rotate(-5deg) scale(1.05);
}

/* --- MENU NAVBAR --- */
.navbar {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

/* --- BOUTON BURGER --- */
.burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 26px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.burger span {
  display: block;
  width: 100%;
  height: 3px;
  background: currentColor;
  border-radius: 3px;
  transition: all 0.3s ease;
}

/* Animation du burger */
.burger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.burger.active span:nth-child(2) {
  opacity: 0;
}
.burger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* --- RESPONSIVE --- */
@media (max-width: 768px) {
  .burger {
    display: flex;
  }

  .navbar {
    position: absolute;
    top: 70px;
    left: 0; /* on part du bord gauche */
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
