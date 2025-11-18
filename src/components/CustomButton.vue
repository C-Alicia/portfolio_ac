<template>
  <button
    :class="buttonClass"
    @click="handleClick"
  >
    <slot>{{ props.text }}</slot>
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useDark } from '@vueuse/core';
import { computed } from 'vue';

// Définition des props
const props = defineProps({
  text: String,
  href: String, // lien PDF ou route interne
});

const router = useRouter();

// Récupération de l'état global du toggle
const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
  storageKey: 'vueuse-color-scheme',
});

// computed pour mettre à jour automatiquement la classe
const buttonClass = computed(() => {
  return ['custom-button', isDark.value ? 'dark' : 'light'];
});

// Gestion du clic
const handleClick = () => {
  if (!props.href) return;

  // Vérifie si c'est un PDF ou un lien externe
  if (props.href.startsWith('http') || props.href.endsWith('.pdf')) {
    window.open(props.href, '_blank'); // ouvre PDF ou lien externe
  } else {
    router.push(props.href); // navigation interne
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

.custom-button {
  width: 200px;
  height: 40px;
  border-radius: 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 2px solid;
}

/* Light mode */
.custom-button.light {
  background-color: #FFFFFF;
  color: #353535;
  border-color: #000000;
}

/* Dark mode */
.custom-button.dark {
  background-color: #F9BC60;
  color: #353535;
  border-color: #000000;
}

/* Hover effects */
.custom-button.light:hover {
  background-color: #f0f0f0;
  color: #000000;
}

.custom-button.dark:hover {
  background-color: #e6a83c;
  color: #000000;
}
</style>
