<template>
  <body color-scheme="isDark ? 'dark' : 'light'">
    <label class="switch">
      <input type="checkbox" @click="toggleDark()" />
      <span class="slider">
        <span class="icon sun">✹</span>
        <span class="icon moon">⏾</span>
      </span>
    </label>
  </body>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
  storageKey: 'vueuse-color-scheme', // facultatif
})
if (isDark.value === undefined) {
  isDark.value = false
}

const toggleDark = useToggle(isDark)
</script>

<style>
/* Conteneur du toggle */
.switch {
  position: relative;
  display: inline-block;
  width: 70px;
  height: 36px;
}

/* Cacher le checkbox HTML */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* Le slider principal */
.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background: linear-gradient(45deg, #f6d365, #fda085); /* Couleurs du mode jour */
  border-radius: 34px;
  transition: background 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
}

/* Icônes soleil et lune */
.icon {
  font-size: 1.2rem;
  z-index: 2;
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.sun {
  color: #facc15;
  opacity: 1;
  transform: translateX(0);
}

.moon {
  color: #cbd5e1;
  opacity: 0;
  transform: translateX(-10px);
}

/* Le petit cercle qui glisse */
.slider::before {
  content: "";
  position: absolute;
  height: 28px;
  width: 28px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.4s ease;
}

/* Quand le toggle est activé (mode sombre) */
input:checked + .slider {
  background: linear-gradient(45deg, #283e51, #485563);
}

input:checked + .slider .sun {
  opacity: 0;
  transform: translateX(10px) rotate(90deg);
}

input:checked + .slider .moon {
  opacity: 1;
  transform: translateX(0);
}

input:checked + .slider::before {
  transform: translateX(34px);
}

/* Thèmes globaux */
[color-scheme='dark'] {
  background-color: rgb(40, 75, 98);
}

[color-scheme='light'] {
  background-color: #ffffff;
}
</style>
