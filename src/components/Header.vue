<template>
  <header class="header" :class="colorScheme">
    <RouterLink to="/" class="header__logo">
      <img :src="colorScheme === 'dark' ? logoDark : logoLight" alt="Logo du site" class="logo" />
    </RouterLink>

    <nav class="navbar">
      <RouterLink to="/propos" class="nav-link">À propos</RouterLink>
      <RouterLink to="/parcours" class="nav-link">Mon parcours</RouterLink>
      <RouterLink to="/projets" class="nav-link">Projets / Réalisations</RouterLink>
      <RouterLink to="/blog" class="nav-link">Blog</RouterLink>
      <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
        <Toogle />
    </nav>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useDark } from '@vueuse/core'
import logoLight from '../assets/img/logo_light.svg'
import logoDark from '../assets/img/logo_dark.svg'
import Toogle from './Toogle.vue'

// On récupère la valeur du mode sombre
const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
})

// On crée une variable réactive pour suivre le mode
const colorScheme = computed(() => (isDark.value ? 'dark' : 'light'))
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

.navbar {
  display: flex;
  align-items: center;
  gap: 1.5rem;
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
