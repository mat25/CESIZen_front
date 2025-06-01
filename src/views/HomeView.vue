<template>
  <div class="home-container">
    <div class="home-image">
        <img src="@/assets/images/big-logo.png" alt="Logo" class="logo" />
    </div>

    <p>CESIZen vous aide à mieux comprendre et gérer votre stress grâce à des outils interactifs.</p>

    <div class="home-card-container">
        <el-card shadow="always">
            <h1 class="home-card-title">Ressources sur la santé mentale</h1>
            <p>Découvrez des conseils et ressources pour mieux gérer votre stress.</p>
            <el-button type="success" tag="router-link" to="/ressources" class="home-card-button">En savoir plus</el-button>
        </el-card>
        <el-card shadow="always">
            <h1 class="home-card-title">Diagnostic de stress</h1>
            <p>Évaluez votre niveau de stress avec un test basé sur l’échelle de Holmes et Rahe.</p>
            <el-button type="success" tag="router-link" to="/diagnostics" class="home-card-button">En savoir plus</el-button>
        </el-card>
    </div>



  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'

const route = useRoute()

onMounted(() => {
  const successMessage = route.query.successMessage as string | undefined
  const errorMessage = route.query.errorMessage as string | undefined

  if (successMessage) {
    ElMessage({
      message: successMessage,
      type: 'success',
    })
  } else if (errorMessage) {
    ElMessage.error(errorMessage)
  }
})
</script>

<style scoped>
.home-container {
    margin: 3%;
}

.home-container p {
    text-align: center;
}

.home-image {
    width: 100%;
    display: flex;
    justify-content: center;
}

.home-image img {
    width: 100%;
    max-width: 600px;
}

.home-card-container {
    margin: 30px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    flex-wrap: wrap;
    text-align: center;
}

.home-card-container  {
    margin: 30px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    flex-wrap: wrap;
    text-align: center;
}

.home-card-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.home-card-button {
    text-decoration: none;
}
</style>
