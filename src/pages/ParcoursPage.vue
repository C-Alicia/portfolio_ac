<template>
    <section class="banner-image" :style="{
        backgroundImage: `url(${isDark ? darkBanner : lightBanner})`
    }">
    </section>

    <main>
        <!-- PARCOURS -->
        <section class="parcours-section first-section" :class="isDark ? 'about-dark' : 'about-light'">
            <div class="container-fluid px-5">

                <div class="row mb-5">
                    <div class="col-12 col-md-10 offset-md-1 d-flex flex-column align-items-start">
                        <h2 :class="['mb-2', isDark ? 'title-dark' : 'title-light']">Vous trouverez</h2>
                        <h3 :class="['mb-3', isDark ? 'title-dark' : 'title-light']">Mon parcours</h3>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>

<script setup>
import { useDark } from '@vueuse/core'

const isDark = useDark({
    selector: 'body',
    attribute: 'color-scheme',
    valueDark: 'dark',
    valueLight: 'light'
})

const lightBanner = new URL('@/assets/img/background_banner.jpg', import.meta.url).href
const darkBanner = new URL('@/assets/img/background_banner_dark.jpg', import.meta.url).href

</script>

<style scoped>
.banner-image {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.banner-image {
  transition: background-image 0.4s ease-in-out;
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


@media (max-width: 768px) {

    .parcours-section .col-12 {
        text-align: center;
        align-items: center !important;
    }

}
</style>