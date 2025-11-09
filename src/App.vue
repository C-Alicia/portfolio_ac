<template>
  <Header/>

  <div class="container">
    <RouterView/>
  </div>

  <Footer/>
  
</template>


<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
.container {
  padding-top: 2rem;
  max-width: calc(100vw - 4rem);
}

</style>
