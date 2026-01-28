<template>
  <transition name="fade">
    <div class="loader-container" v-if="visible">
      <!-- Canvas pour les lumières de type fibre OM5 -->
      <canvas ref="fiberCanvas" class="fiber-canvas"></canvas>

      <div class="content">
        <img src="/src/assets/img/Avatar__lili.png" alt="Logo" class="loader-logo" />

        <div class="progress-ring">
          <svg width="100" height="100">
            <circle class="progress-background" cx="50" cy="50" r="42" />
            <circle
              class="progress-bar"
              cx="50"
              cy="50"
              r="42"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="dashOffset"
            />
          </svg>
          <span class="percent">{{ progress }}%</span>
        </div>

        <p class="loading-text">Chargement en cours<span class="dots"></span></p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed, onMounted, defineEmits } from "vue";

const emit = defineEmits(["finished"]);
const progress = ref(0);
const visible = ref(true);

const radius = 42;
const circumference = 2 * Math.PI * radius;
const dashOffset = computed(() =>
  Math.max(circumference - (progress.value / 100) * circumference, 0)
);

// ===== Canvas fibres optiques =====
const fiberCanvas = ref(null);
let ctx;
const particles = [];
const PARTICLE_COUNT = 80;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function initParticles(width, height) {
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: random(0, width),
      y: random(0, height),
      radius: random(1, 3),
      speedX: random(-0.5, 0.5),
      speedY: random(-0.5, 0.5),
      alpha: random(0.3, 0.9)
    });
  }
}

function animateParticles(width, height) {
  if (!ctx) return;
  ctx.clearRect(0, 0, width, height);
  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0) p.x = width;
    if (p.x > width) p.x = 0;
    if (p.y < 0) p.y = height;
    if (p.y > height) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 255, 255, ${p.alpha})`;
    ctx.fill();
  });
  requestAnimationFrame(() => animateParticles(width, height));
}

onMounted(() => {
  // ===== Progress =====
  const interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        visible.value = false;
        emit("finished");
      }, 700);
    }
  }, 60);

  // ===== Canvas fibre optique =====
  const canvas = fiberCanvas.value;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  initParticles(canvas.width, canvas.height);
  animateParticles(canvas.width, canvas.height);

  // Adapter canvas si redimension de la fenêtre
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.7s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.fade-enter-to, .fade-leave-from { opacity: 1; }

.loader-container {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  overflow: hidden;
  z-index: 9999;
}

.fiber-canvas {
  position: absolute;
  inset: 0;
  z-index: 1;
}

/* Contenu loader */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 10;
}

/* Logo flottant */
.loader-logo {
  width: 180px;
  filter: drop-shadow(0 0 15px #00eaffaa);
  animation: floatLogo 2s ease-in-out infinite alternate;
}
@keyframes floatLogo {
  from { transform: translateY(0); }
  to { transform: translateY(-10px); }
}

/* Cercle de progression */
.progress-ring {
  position: relative;
  width: 100px;
  height: 100px;
}
.progress-background { fill: none; stroke: rgba(255,255,255,0.15); stroke-width: 8; }
.progress-bar { fill: none; stroke: #00eaff; stroke-width: 8; stroke-linecap: round; transform: rotate(-90deg); transform-origin: center; transition: stroke-dashoffset 0.2s ease; }
.percent { position: absolute; font-size: 14px; font-weight: bold; color: #00eaff; top: 50%; left: 50%; transform: translate(-50%, -50%); }

/* Texte chargement */
.loading-text { color: #fff; font-size: 14px; letter-spacing: 1px; }
.dots::after { content: ''; display: inline-block; width: 1ch; animation: dots 1s steps(3, end) infinite; }
@keyframes dots { 0% { content: ''; } 33% { content: '.'; } 66% { content: '..'; } 100% { content: '...'; } }
</style>
