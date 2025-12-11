<template>
  <footer :class="[isDark ? 'footer-dark' : 'footer-light']">

    <!-- Section réseaux sociaux -->
    <section class="d-flex flex-column flex-md-row justify-content-between align-items-center p-4"
      :class="[isDark ? 'social-dark' : 'social-light']">
      <div class="me-0 me-md-5 d-flex align-items-center mb-2 mb-md-0">
        <span>Rejoignez-moi sur mes réseaux sociaux :</span>
      </div>

      <div class="d-flex justify-content-center gap-3 social-icons-container">
        <a href="https://discordapp.com/users/aliciac#9538" class="social-icon" target="_blank">
          <i class="fab fa-discord fa-lg"></i>
        </a>
        <a href="https://www.linkedin.com/in/aliciacharef/" class="social-icon" target="_blank">
          <i class="fab fa-linkedin fa-lg"></i>
        </a>
        <a href="https://github.com/C-Alicia" class="social-icon" target="_blank">
          <i class="fab fa-github fa-lg"></i>
        </a>
        <a href="https://www.instagram.com/domo_labs/" class="social-icon" target="_blank">
          <i class="fab fa-instagram fa-lg"></i>
        </a>
      </div>
    </section>

    <!-- Section colonnes du footer -->
    <section>
      <div class="container text-center text-md-start mt-5">
          <div class="row mt-3 g-0 gx-5 justify-content-evenly">
          <!-- Colonne Alicia CHAREF -->
          <div class="col-md-3 col-lg-4 col-xl-3 mb-4 ps-md-0">
            <div class="d-flex flex-column align-items-center align-items-md-start gap-2">
              <div class="d-flex align-items-center gap-2">
                <img :src="isDark ? '/src/assets/img/logo_dark.svg' : '/src/assets/img/logo_light.svg'" alt="Logo"
                  class="footer-logo" />
                <h6 class="fw-bold mb-0">Alicia CHAREF</h6>
              </div>
              <hr class="footer-hr" />
              <p class="mb-2 text-center text-md-start">
                Conceptrice développeuse d'application <br> basée dans l’ouest Lyonnais.
              </p>
              <img src="/src/assets/img/Avatar__lili.png" alt="Avatar" class="footer-watermark" />
            </div>
          </div>

          <!-- Colonne Contact -->
          <div class="col-12 col-md-4 col-lg-3 mb-4">
            <div class="contact-text d-flex flex-column align-items-center align-items-md-start gap-2">
              <h6 class="fw-bold">Contact</h6>
              <hr class="footer-hr" />
              <p class="contact-item">
                <i class="fas fa-envelope contact-icon"></i>
                <a class="footer-mail" href="mailto:charef.alicia@gmail.com">charef.alicia@gmail.com</a>
              </p>
              <p class="contact-item">
                <i class="fas fa-phone contact-icon"></i>
                +33 6 12 09 81 26
              </p>
              <p class="contact-item">
                <i class="fas fa-home contact-icon"></i>
                Brignais, France
              </p>
            </div>

            <!-- Carte centrée sur mobile et alignée à gauche sur desktop -->
            <div class="contact-map mt-3 d-flex justify-content-center justify-content-md-start">
              <Map />
            </div>
          </div>
          
          
        </div>
      </div>
    </section>

    <!-- Copyright -->
    <div class="text-center p-3" :class="[isDark ? 'copyright-dark' : 'copyright-light']">
      © 2025 - 2027 C-Alicia. Tous droits réservés.
    </div>
  </footer>
</template>

<script setup>
import { useDark } from '@vueuse/core'
import Map from './Map.vue';

const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
})
</script>

<style>
/* Footer général */
footer {
  font-family: "Work Sans", sans-serif;
  color: #FFFFFF;
}

/* Thèmes */
.footer-light {
  background-color: rgba(0, 0, 0, 0.9);
}

.social-light {
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.footer-dark {
  background-color: rgba(38, 65, 86, 0.95);
}

.social-dark {
  background-color: rgba(38, 65, 86, 0.95);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.copyright-light,
.copyright-dark {
  background-color: #1e1e1e;
  color: #c2d2e0;
}

/* Titres et séparateurs */
h6 {
  font-family: Poppins, sans-serif;
  font-weight: bold;
  color: #C2D2E0;
}

.footer-hr {
  width: 75px;
  height: 2px;
  background-color: #C2D2E0;
  border: none;
  margin: 0.5rem 0;
}

/* Logo à côté du nom */
.footer-logo {
  width: 30px;
  height: 30px;
  transition: transform 0.4s ease;
}

.footer-logo:hover {
  transform: rotate(-5deg) scale(1.05);
}

/* Avatar */
.footer-watermark {
  width: 200px;
  max-width: 100%;
  height: auto;
  opacity: 0.6;
  margin-top: 0.5rem;
  display: block;
  transition: transform 0.3s ease;
}

.footer-watermark:hover {
  transform: scale(1.05);
}

/* Icônes sociales hover */
@keyframes bounce-hover {
  0% {
    transform: translateY(0) rotate(0deg) scale(1);
  }

  30% {
    transform: translateY(-5px) rotate(-5deg) scale(1.1);
  }

  50% {
    transform: translateY(0) rotate(0deg) scale(1.05);
  }

  70% {
    transform: translateY(-3px) rotate(-2deg) scale(1.1);
  }

  100% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
}

.social-icon {
  color: #fff;
  font-size: 1.25rem;
  transition: color 0.3s ease;
}

.footer-light .social-icon:hover {
  color: #284b63;
  animation: bounce-hover 0.5s forwards;
}

.footer-dark .social-icon:hover {
  color: #F9BC60;
  animation: bounce-hover 0.5s forwards;
}

/* Contact */
.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.contact-icon {
  min-width: 25px;
  margin-right: 10px;
  text-align: center;
  color: #fff;
}

.footer-mail {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-light .footer-mail:hover {
  color: #284b63;
}

.footer-dark .footer-mail:hover {
  color: #F9BC60;
}

/* Carte responsive */
.contact-map {
  width: 100%;
}

.contact-map>* {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Mobile */
@media(max-width:767px) {
  .contact-text {
    align-items: center;
    text-align: center;
  }
}
</style>
