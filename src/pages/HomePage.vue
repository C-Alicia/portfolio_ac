<template>

  <section class="banner-image">
    
 
      <h1 class="text-white font-bold text-5xl mb-4">
        Bonjour & Bienvenue,
      </h1>


      <h2 class="text-white  align-items-center flex-wrap">
        <span>Hi, je suis</span>
        <div class="message">
          <div class="word1">AliciaC</div>
          <div class="word2">dev</div>
          <div class="word3">créative</div>
        </div>
      </h2>


      <br>

      <a href="#contact" @click="scrollToFooter">
        <img src="/src/assets/img/mouse.svg" width="50" height="50" class="iconMouseBounce" alt="icon_mouse">
      </a>


  </section>


</template>

<script setup>
import { ref } from 'vue'

const scrollToFooter = () => {
  document.querySelector("#contact").scrollIntoView({
    behavior: "smooth"
  })
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.banner-image {
  width: 100vw;
  height: 100vh;
  background-image: url("/src/assets/img/backgroundHomePageLight.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

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

/* === Bounce souris === */
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

/* Mobile: désactiver parallax */
@media (max-width: 991px) {
  .banner-image {
    background-attachment: scroll;
  }

  h1, h2 {
    text-align: center;
  }

  h2 {
    display: flex;
    flex-direction: column;  /* mots empilés */
    align-items: center;
    justify-content: center;
    white-space: normal;     /* permet le wrap */
    width: 100%;
    overflow: visible;
  }

  h2 span {
    margin-bottom: 0.5rem; /* espace sous "Hi, je suis" */
  }

  .message {
    position: static;      /* plus absolute */
    animation: none;       /* désactive l'animation */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    height: auto;
    padding-left: 0;
    overflow: hidden;
  }

  .word1, .word2, .word3 {
    position: static;
    display: block;
    opacity: 1;
    margin: 0.3rem 0;
    text-align: center;
  }
}
</style>
