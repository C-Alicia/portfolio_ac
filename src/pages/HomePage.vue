<template>
  <section class="banner-image">
    <h1 class="text-white font-bold text-5xl mb-4">
      Bonjour & Bienvenue,
    </h1>

    <h2 class="text-white align-items-center flex-wrap">
      <span>Hi, je suis</span>
      <div class="message">
        <div class="word1">AliciaC</div>
        <div class="word2">dev</div>
        <div class="word3">créative</div>
      </div>
    </h2>

    <br />

    <!-- Navigation fluide (Vue Router) -->
    <router-link to="/propos">
      <img src="/src/assets/img/mouse.svg" width="50" height="50" class="iconMouseBounce" alt="icon_mouse" />
    </router-link>
  </section>
</template>

<script setup>
// Rien à gérer ici pour la navigation
</script>

<style scoped>
/* === HERO === */
.banner-image {
  width: 100%;
  height: 100vh;
  background-image: url("/src/assets/img/Bg_alicia_banner.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

/* === TITRES === */
h2 {
  color: #333;
  font-family: poppins, sans-serif;
  font-size: 3rem;
  font-weight: 100;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  width: 550px;
}

h2 span {
  font-size: 40px;
  margin-left: 10px;
}

/* === TEXTE ANIMÉ === */
.message {
  color: whitesmoke;
  display: block;
  font-weight: 800;
  overflow: hidden;
  position: absolute;
  padding-left: 0.5rem;
  top: 0.2rem;
  left: 250px;
  animation: openclose 10s ease-in-out infinite;
}

.word1,
.word2,
.word3 {
  font-family: tahoma;
}

/* Animation mots */
@keyframes openclose {
  0% {
    top: 0.2rem;
    width: 0;
  }

  5% {
    width: 0;
  }

  15% {
    width: 230px;
  }

  30% {
    top: 0.2rem;
    width: 230px;
  }

  33% {
    top: 0.2rem;
    width: 0;
  }

  35% {
    top: 0.2rem;
    width: 0;
  }

  38% {
    top: -4.5rem;
  }

  48% {
    top: -4.5rem;
    width: 190px;
  }

  62% {
    top: -4.5rem;
    width: 190px;
  }

  66% {
    top: -4.5rem;
    width: 0;
    text-indent: 0;
  }

  71% {
    top: -9rem;
    width: 0;
    text-indent: 5px;
  }

  86% {
    top: -9rem;
    width: 285px;
  }

  95% {
    top: -9rem;
    width: 285px;
  }

  98% {
    top: -9rem;
    width: 0;
    text-indent: 5px;
  }

  100% {
    top: 0;
    width: 0;
    text-indent: 0;
  }
}

/* === SOURIS === */
.iconMouseBounce {
  animation: bounce 1.8s infinite ease-in-out;
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-15px);
  }

  60% {
    transform: translateY(-7px);
  }
}

/* === MOBILE === */
@media (max-width: 991px) {

  h1,
  h2 {
    text-align: center;
  }

  h2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: normal;
    width: 100%;
    overflow: visible;
  }

  h2 span {
    margin-bottom: 0.5rem;
  }

  .message {
    position: static;
    animation: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .word1,
  .word2,
  .word3 {
    margin: 0.3rem 0;
    text-align: center;
  }
}
</style>
