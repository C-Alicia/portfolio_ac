<template>
  <header>
    <section class="parallax-video">
      <video class="video-background" autoplay loop muted playsinline>
        <source src="/src/assets/img/clip_bg_banner.mp4" type="video/mp4" />
      </video>
    </section>
  </header>

  <main>
    <section class="about-moi py-5" :class="isDark ? 'about-dark' : 'about-light'">
      <div class="container-fluid px-5">

        <div class="row mb-5">
          <div class="col-12 col-md-10 offset-md-1 d-flex flex-column align-items-start">
            <h2 :class="['mb-2', isDark ? 'title-dark' : 'title-light']">A propos de</h2>
            <h3 :class="['mb-3', isDark ? 'title-dark' : 'title-light']">Moi</h3>
            <p :class="['text-justify', isDark ? 'message-dark' : 'message-light']">
              Je suis basé à Brignais dans le magnifique région Lyonnaise dans le département du Rhône situé en
              Auvergne-Rhône-Alpes. Récemment, je me suis installé pour deux ans au Canada dans le cadre d'un PVT
              Vacance travail.
              Un projet qui me tient à cœur depuis longtemps afin de découvrir une nouvelle culture et d'élargir mes
              horizons professionnel et personnel.
            </p>
          </div>
        </div>


        <div class="row align-items-start">
          <!-- PHOTO -->
          <div class="col-12 col-md-4 d-flex justify-content-center justify-content-md-end pe-md-4">
            <div class="photo-hover-wrapper">
              <img :src="currentImage" alt="Image dynamique" class="img-fluid rounded about-photo-img"
                @mouseover="changeImage" @mouseleave="resetImage" />
            </div>
          </div>

          <div class="col-12 col-md-6 d-flex flex-column ps-md-4">
            <div class="d-flex align-items-center mb-3">
              <h2 :class="['mb-0', isDark ? 'title-dark' : 'title-light']">Quelques mots sur moi</h2>
              <img src="/src/assets/img/img_book - Copie.png" alt="book icon" class="ms-3 book-icon">
            </div>

            <p :class="['text-justify lh-lg mb-3', isDark ? 'message-dark' : 'message-light']">
              Après moultes expériences dans différents domaines de travail, j'ai commencé à m'intéresser aux
              différents métiers autour du numérique, ce qui m'a finalement amené au développement web car j'aime
              beaucoup créer des interfaces utilisateurs.
            </p>

            <p :class="['text-justify lh-lg mb-3', isDark ? 'message-dark' : 'message-light']">
              J'ai alors entamé une formation à l'issue de laquelle j'ai obtenu un Bac+2 en développement web et web
              mobile, et un Bac+3 en conception d’applications spécialisation DevOps.
            </p>

            <hr :class="['my-4', isDark ? 'hr-dark' : 'hr-light']">

            <p :class="['text-justify lh-lg mb-3', isDark ? 'message-dark' : 'message-light']">
              Ces expériences variées m'ont permis de développer des compétences techniques et humaines qui me
              rendent polyvalent et adapté à beaucoup de situations.
            </p>

            <p :class="['text-justify lh-lg mb-4', isDark ? 'message-dark' : 'message-light']">
              À long terme, je voudrais me spécialiser dans le domaine de la domotique. Ayant un attrait pour la
              technologie et l'informatique, je suis très motivée par ce nouveau défi dans mon parcours
              professionnel pour devenir cheffe de projet digital.
            </p>

            <div class="d-flex flex-column flex-md-row gap-3 mt-2 justify-content-end">
              <CustomButton text="Consulter mon CV" href="/src/assets/CV_Alicia.pdf" />
              <CustomButton text="Me contacter" href="#contact" />
            </div>

          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<script setup>
import { useDark } from '@vueuse/core'
import { ref } from 'vue'
import CustomButton from '@/components/CustomButton.vue'  // <-- ajuste le chemin selon ton projet

const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light'
})

const defaultImage = '/src/assets/img/image_about_serious.png'
const hoverImage = '/src/assets/img/image_about_me.png'
const currentImage = ref(defaultImage)
const changeImage = () => currentImage.value = hoverImage
const resetImage = () => currentImage.value = defaultImage

</script>

<style scoped>
/* RESET & PARALLAX */
.parallax-video {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.video-background {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
}

/* SECTION STYLES */
.about-light {
  background: rgba(255, 255, 255, 0.8);
  padding: 4rem 0;
}

.about-dark {
  background: rgba(40, 75, 99, 0.8);
  padding: 4rem 0;
}

.title-light,
.message-light {
  color: #000;
}

.title-dark,
.message-dark {
  color: #fff;
}

h2,
h3 {
  font-family: 'Poppins', sans-serif;
}

h3 {
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
}

.about-photo-img {
  max-width: 480px;
  /* ajuste : 200 / 220 / 260 / 300 */
  width: 100%;
  height: auto;
}

.book-icon {
  width: 45px;
  height: auto;
}

/* BOUTONS */


.btn-dark {
  background: #ffc107;
  color: #000;
  border: none;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .about-moi .col-12 {
    text-align: center;
    align-items: center !important;
  }

  .about-photo-img {
    margin-bottom: 2rem;
    /* espace sous la photo en mobile */
  }
}
</style>