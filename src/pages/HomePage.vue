<template>
<div class="home-page">
    <h1>Bienvenue sur ma page</h1>

    <div class="buttons-container">
      <!-- Bouton PDF -->
      <CustomButton
        text="Consulter mon CV"
        :href="cvFile"
      />

      <!-- Bouton scroll vers footer -->
      <CustomButton
        text="Me contacter"
        href="#contact"
        @click="scrollToFooter"
      />
    </div>

    <!-- Contenu de la page -->
    <div style="height: 800px;"></div> <!-- Juste pour simuler du contenu -->

   
  </div>
       
</template>

<script setup>
import { ref } from 'vue';
import CustomButton from '@/components/CustomButton.vue';
import cvFile from '@/assets/CV_Alicia.pdf'; // ton PDF

const footerRef = ref(null);

const scrollToFooter = () => {
  footerRef.value.scrollIntoView({ behavior: 'smooth' });
};
</script>

<style scoped>
.home-page {
  padding: 20px;
}

.buttons-container {
  display: flex;
  gap: 20px; /* espace entre les boutons */
  margin-bottom: 50px;
}

</style>