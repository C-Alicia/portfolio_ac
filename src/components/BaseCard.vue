<template>
  <div class="base-card">
    <slot />
  </div>
</template>

<style scoped>
.base-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.base-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}
</style>
