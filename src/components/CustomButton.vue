<template>
  <button :class="buttonClass" @click="handleClick">
    <!-- slot si utilisé, sinon texte -->
    <slot>{{ text }}</slot>
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useDark } from '@vueuse/core'
import { computed } from 'vue'

// Déstructuration des props
const { text, href } = defineProps({
  text: String,
  href: String
})

const router = useRouter()

// Mode sombre / clair
const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light'
})

// Classes dynamiques
const buttonClass = computed(() => ['custom-button', isDark.value ? 'dark' : 'light'])

// Gestion du clic
const handleClick = () => {
  if (!href) return

  if (href.startsWith('#')) {
    const target = document.querySelector(href)
    target?.scrollIntoView({ behavior: 'smooth' })
    return
  }

  if (href.startsWith('http') || href.endsWith('.pdf')) {
    window.open(href, '_blank')
    return
  }

  router.push(href)
}
</script>

<style scoped>
.custom-button {
  width: 200px;
  height: 40px;
  border-radius: 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 2px solid;
}

.custom-button.light {
  background-color: #ffffff;
  color: #353535;
  border-color: #000000;
}

.custom-button.dark {
  background-color: #f9bc60;
  color: #353535;
  border-color: #000000;
}

.custom-button.light:hover {
  background-color: #284b63;
  color: #ffffff;
}

.custom-button.dark:hover {
  background-color: #e6a83c;
  color: #000000;
}
</style>
