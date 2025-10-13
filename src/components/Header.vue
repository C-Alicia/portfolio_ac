<template>
    <header class="header">
        <RouterLink to="/" class="header__logo">
            <img :src="logoLight" alt="Logo du site" width="15%" />
        </RouterLink>
        <nav>
            <RouterLink to="/propos">A propos</RouterLink>
            <RouterLink to="/parcours">Mon parcours</RouterLink>
            <RouterLink to="/projets">Projets / Réalisations</RouterLink>
            <RouterLink to="/blog">Blog</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
        </nav>
    </header>
</template>


<script setup>
import logoLight from '../assets/img/logo_light.svg'
import logoDark from '../assets/img/logo_dark.svg'
</script>


<style>
.header {
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
    gap: 1rem;
    background-color: #ffffff10;
    border-bottom: 1px solid #ffffff2d;
}
</style>