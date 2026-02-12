<template>
  <BaseCard class="hobbie-card">
    <div class="hobbie-icon">
      <img :src="icon" :alt="label" />
    </div>
    <p class="hobbie-label">{{ label }}</p>
  </BaseCard>
</template>

<script setup>
import BaseCard from '@/components/BaseCard.vue'

defineProps({
  icon: { type: String, required: true },
  label: { type: String, required: true }
})
</script>

<style scoped>
.hobbie-card {
  background: #01132C;
  max-width: 320px;
  width: 100%;
  height: 398px;
}

.hobbie-icon img {
  margin: 1rem auto;
}

.hobbie-label {
  font-family: 'Poppins', sans-serif;
  color: #D9D9D9;
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
}
</style>
