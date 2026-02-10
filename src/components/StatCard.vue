<template>
  <div class="stat-card">
    <div class="stat-icon">
      <img :src="icon" :alt="label" />
    </div>

    <h3 class="stat-value">{{ value }}</h3>
    <p class="stat-label">{{ label }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.stat-card {
  background: #d9d9d9;
  border-radius: 5px;
  padding: 4rem 1rem;
  height: 100%;
  border: 1px solid #000;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.stat-icon img {
  width: 80px;
  height: 80px;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-weight: bold;
  font-family: 'Work Sans', sans-serif;
  font-size: 1rem;
  margin: 0;
}

.stat-label {
  margin-top: 0.5rem;
  font-size: 0.8rem;
}

/* 🌙 Dark mode automatique */
[color-scheme='dark'] .stat-card {
  background: rgb(60, 110, 113);
  color: #fff;
}
</style>
