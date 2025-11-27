<template>
  <section id="notfound">
    <div class="notfound">
      <div class="notfound404">
        <h1>Oops!</h1>
      </div>
      <h2>404 - Page not found</h2>
      <p>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

     <CustomButton text="Go to Home" href="/" />

    </div>
  </section>
</template>

<script setup>
// plus besoin de data ou de logique ici : le toggle global gère tout
import CustomButton from '@/components/CustomButton.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700;900&family=Work+Sans:wght@400;700&display=swap');

#notfound {
  position: relative;
  height: 100vh;
}

#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; /* centrer tout */
  gap: 20px; /* espace vertical auto entre éléments */
}

.notfound404 {
  height: 300px;
  position: relative;
  z-index: -1;
}

.notfound404 h1 {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(100px, 20vw, 230px);
  margin: 0;
  font-weight: 900;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: url('/src/assets/img/bg.jpg') no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: cover;
  background-position: center;
}

.notfound h2 {
  font-family: 'Poppins', sans-serif;
  color: #000;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
}

.notfound p {
  font-family: 'Work Sans', sans-serif;
  color: #000;
  font-size: 14px;
  font-weight: 400;
  margin: 10px 0 20px;
}

/* 🌙 Appliquer automatiquement quand le body est en dark */
[color-scheme='dark'] #notfound h2,
[color-scheme='dark'] #notfound p {
  color: #fff;
}

/* Responsive */
@media only screen and (max-width: 767px) {
  .notfound404 {
    height: 142px;
  }

  .notfound404 h1 {
    font-size: 18vw;
  }
}
</style>
