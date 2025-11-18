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

    <!-- On passe menuOpen au composant enfant -->
    <Navbar ref="navbarRef" />
  </header>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useDark } from '@vueuse/core'
import Navbar from './Navbar.vue'
import logoLight from '../assets/img/logo_light.svg'
import logoDark from '../assets/img/logo_dark.svg'

// Mode sombre
const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
})

const colorScheme = computed(() => (isDark.value ? 'dark' : 'light'))

// État du menu
const menuOpen = ref(false)
const navbarRef = ref(null)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  if (menuOpen.value) navbarRef.value.openMenu()
  else navbarRef.value.closeMenu()
}

// Ferme le menu si on change de page
watch(menuOpen, (open) => {
  if (!open) navbarRef.value?.closeMenu()
})
</script>

<style scoped>
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

.burger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.burger.active span:nth-child(2) {
  opacity: 0;
}
.burger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .burger {
    display: flex;
  }
}
</style>
