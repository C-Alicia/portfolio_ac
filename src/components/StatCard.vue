<template>
  <BaseCard class="stat-card">
    <div class="stat-icon">
      <img :src="icon" :alt="label" />
    </div>

    <h3 class="stat-value">{{ value }}</h3>
    <p class="stat-label">{{ label }}</p>
  </BaseCard>
</template>

<script setup>
import BaseCard from '@/components/BaseCard.vue'

defineProps({
  icon: { type: String, required: true },
  value: { type: [String, Number], required: true },
  label: { type: String, required: true }
})
</script>

<style scoped>
.stat-card {
  background: rgba(217, 217, 217, 1);
  border-radius: 5px;
  padding: 8rem 1.5rem;
  width: 325px;
  height: 450px;
  border: 1px solid #000;
}

.stat-icon img {
  width: 110px;
  height: 110px;
  margin-bottom: 3rem;
}

.stat-value {
  font-weight: bold;
  font-family: 'Work Sans', sans-serif;
  font-size: 1rem;
}

.stat-label {
  margin-top: 0.5rem;
}

/* 🌙 Dark mode */
[color-scheme='dark'] .stat-card {
  background: rgba(60, 110, 113, 1);
  color: #fff;
  border-color: rgba(53, 53, 53, 1);
}
</style>
