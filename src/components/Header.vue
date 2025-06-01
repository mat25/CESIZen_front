<template>
  <el-header class="header-shadow header">
    <div class="logo-container">
      <router-link to="/">
        <img src="@/assets/images/small-logo.png" alt="Logo" class="logo" />
      </router-link>
    </div>

    <nav class="nav-links">
      <router-link to="/" class="nav-link">Accueil</router-link>
      <router-link to="/ressources" class="nav-link">Ressources</router-link>
      <router-link to="/diagnostics" class="nav-link">Diagnostics</router-link>

      <el-button
        type="success"
        size="medium"
        :circle="false"
        tag="router-link"
        :to="user ? '/profile' : '/login'"
        class="header-button"
      >
        {{ user ? user.username : 'Compte' }}
      </el-button>
    </nav>
  </el-header>
</template>

<script setup>
import { onMounted } from 'vue'
import userService from '@/services/userService'
import { useAuth } from '@/composables/useAuth'

const { user, setUser, clearUser } = useAuth()

onMounted(async () => {
  if (user.value || !localStorage.getItem('token')) return

  try {
    const response = await userService.getMe()
    setUser(response.data)
  } catch (err) {
    clearUser()
  }
})
</script>


<style scoped>

.header {
  position: fixed;
  top: 0; 
  left: 0; 
  right: 0;
  z-index: 50;
  height: var(--height-header);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background-color: #f5f7fa;
}

.header-shadow {
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo {
  height: 80px;
  width: 70px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-link {
  color: black;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--el-color-success);
}

.header-button {
  text-decoration: none;
}

</style>
