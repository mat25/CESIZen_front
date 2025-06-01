
import { ref } from 'vue'

const user = ref(null)

function setUser(newUser) {
  user.value = newUser
}

function clearUser() {
  user.value = null
}

export function useAuth() {
  return {
    user,
    setUser,
    clearUser
  }
}
